import { b as x } from './antd-BmrhB3rb.js';
import { r as b } from './index-Ck6h_6RS.js';
function z(l, a) {
  for (var o = 0; o < a.length; o++) {
    const i = a[o];
    if (typeof i != 'string' && !Array.isArray(i)) {
      for (const f in i)
        if (f !== 'default' && !(f in l)) {
          const u = Object.getOwnPropertyDescriptor(i, f);
          u && Object.defineProperty(l, f, u.get ? u : { enumerable: !0, get: () => i[f] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: 'Module' }));
}
var O = { exports: {} };
(function (l, a) {
  (function (o) {
    o(b());
  })(function (o) {
    o.defineMode('solr', function () {
      var i = /[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,
        f = /[\|\!\+\-\*\?\~\^\&]/,
        u = /^(OR|AND|NOT|TO)$/i;
      function k(e) {
        return parseFloat(e).toString() === e;
      }
      function g(e) {
        return function (t, n) {
          for (var r = !1, c; (c = t.next()) != null && !(c == e && !r); ) r = !r && c == '\\';
          return r || (n.tokenize = s), 'string';
        };
      }
      function d(e) {
        return function (t, n) {
          var r = 'operator';
          return (
            e == '+'
              ? (r += ' positive')
              : e == '-'
                ? (r += ' negative')
                : e == '|'
                  ? t.eat(/\|/)
                  : e == '&'
                    ? t.eat(/\&/)
                    : e == '^' && (r += ' boost'),
            (n.tokenize = s),
            r
          );
        };
      }
      function v(e) {
        return function (t, n) {
          for (var r = e; (e = t.peek()) && e.match(i) != null; ) r += t.next();
          return (
            (n.tokenize = s),
            u.test(r) ? 'operator' : k(r) ? 'number' : t.peek() == ':' ? 'field' : 'string'
          );
        };
      }
      function s(e, t) {
        var n = e.next();
        return (
          n == '"'
            ? (t.tokenize = g(n))
            : f.test(n)
              ? (t.tokenize = d(n))
              : i.test(n) && (t.tokenize = v(n)),
          t.tokenize != s ? t.tokenize(e, t) : null
        );
      }
      return {
        startState: function () {
          return { tokenize: s };
        },
        token: function (e, t) {
          return e.eatSpace() ? null : t.tokenize(e, t);
        },
      };
    }),
      o.defineMIME('text/x-solr', 'solr');
  });
})();
var p = O.exports;
const m = x(p),
  h = z({ __proto__: null, default: m }, [p]);
export { h as s };
