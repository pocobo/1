var d = (n, e, s) =>
  new Promise((t, i) => {
    var r = (c) => {
        try {
          o(s.next(c));
        } catch (a) {
          i(a);
        }
      },
      u = (c) => {
        try {
          o(s.throw(c));
        } catch (a) {
          i(a);
        }
      },
      o = (c) => (c.done ? t(c.value) : Promise.resolve(c.value).then(r, u));
    o((s = s.apply(n, e)).next());
  });
import { bp as l, f as h, bq as f, aa as y, e as g } from './antd-BmrhB3rb.js';
function A(n) {
  if (n && n.component) {
    const e = f(`${q(n.component)}_`);
    return (n.key = e), (n.field = e), !0;
  }
  return f('key_');
}
function F(n, e) {
  let s = [];
  if (l(n)) {
    if (y(e)) s = n.splice(e, 1);
    else {
      const t = n.findIndex(e);
      t !== -1 && (s = n.splice(t, 1));
    }
    return s.shift();
  }
}
function q(n) {
  return n.replace(/([A-Z])/g, '_$1').toLowerCase();
}
function p(n, e) {
  if (!l(n)) return;
  const s = (t) => {
    t.forEach((i) => {
      var r;
      ['Grid'].includes(i.component)
        ? (r = i.columns) == null || r.forEach((u) => s(u.children))
        : e(i);
    });
  };
  s(n);
}
const b = (n, e) => {
    let s;
    const t = (i) =>
      i.some((r) => {
        var o;
        const { component: u } = r;
        return ['Grid'].includes(u)
          ? (o = r.columns) == null
            ? void 0
            : o.some((c) => t(c.children))
          : (e(r) && (s = r), e(r));
      });
    return t(n), s;
  },
  x = (n) => {
    const e = h(n);
    return (
      delete e.currentItem,
      delete e.activeKey,
      e.schemas &&
        p(e.schemas, (s) => {
          delete s.icon, delete s.key;
        }),
      e
    );
  },
  E = (n) =>
    d(void 0, null, function* () {
      try {
        return g(n) ? yield n() : n;
      } catch (e) {
        return [];
      }
    }),
  _ = (n) => {
    p(n, (e) => {
      'required' in e &&
        (!l(e.rules) && (e.rules = []),
        e.rules.push({ required: !0, message: e.message }),
        delete e.required,
        delete e.message);
    });
  };
export { _ as a, b, F as c, p as f, A as g, E as h, x as r };
