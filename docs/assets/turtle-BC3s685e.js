import { b } from './antd-BmrhB3rb.js';
import { r as m } from './index-Ck6h_6RS.js';
function w(f, x) {
  for (var i = 0; i < x.length; i++) {
    const l = x[i];
    if (typeof l != 'string' && !Array.isArray(l)) {
      for (const c in l)
        if (c !== 'default' && !(c in f)) {
          const o = Object.getOwnPropertyDescriptor(l, c);
          o && Object.defineProperty(f, c, o.get ? o : { enumerable: !0, get: () => l[c] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, { value: 'Module' }));
}
var s = { exports: {} };
(function (f, x) {
  (function (i) {
    i(m());
  })(function (i) {
    i.defineMode('turtle', function (l) {
      var c = l.indentUnit,
        o;
      function a(n) {
        return new RegExp('^(?:' + n.join('|') + ')$', 'i');
      }
      a([]);
      var h = a(['@prefix', '@base', 'a']),
        g = /[*+\-<>=&|]/;
      function v(n, e) {
        var t = n.next();
        if (((o = null), t == '<' && !n.match(/^[\s\u00a0=]/, !1)))
          return n.match(/^[^\s\u00a0>]*>?/), 'atom';
        if (t == '"' || t == "'") return (e.tokenize = k(t)), e.tokenize(n, e);
        if (/[{}\(\),\.;\[\]]/.test(t)) return (o = t), null;
        if (t == '#') return n.skipToEnd(), 'comment';
        if (g.test(t)) return n.eatWhile(g), null;
        if (t == ':') return 'operator';
        if ((n.eatWhile(/[_\w\d]/), n.peek() == ':')) return 'variable-3';
        var r = n.current();
        return h.test(r) ? 'meta' : t >= 'A' && t <= 'Z' ? 'comment' : 'keyword';
        var r = n.current();
      }
      function k(n) {
        return function (e, t) {
          for (var r = !1, u; (u = e.next()) != null; ) {
            if (u == n && !r) {
              t.tokenize = v;
              break;
            }
            r = !r && u == '\\';
          }
          return 'string';
        };
      }
      function p(n, e, t) {
        n.context = { prev: n.context, indent: n.indent, col: t, type: e };
      }
      function d(n) {
        (n.indent = n.context.indent), (n.context = n.context.prev);
      }
      return {
        startState: function () {
          return { tokenize: v, context: null, indent: 0, col: 0 };
        },
        token: function (n, e) {
          if (
            (n.sol() &&
              (e.context && e.context.align == null && (e.context.align = !1),
              (e.indent = n.indentation())),
            n.eatSpace())
          )
            return null;
          var t = e.tokenize(n, e);
          if (
            (t != 'comment' &&
              e.context &&
              e.context.align == null &&
              e.context.type != 'pattern' &&
              (e.context.align = !0),
            o == '(')
          )
            p(e, ')', n.column());
          else if (o == '[') p(e, ']', n.column());
          else if (o == '{') p(e, '}', n.column());
          else if (/[\]\}\)]/.test(o)) {
            for (; e.context && e.context.type == 'pattern'; ) d(e);
            e.context && o == e.context.type && d(e);
          } else
            o == '.' && e.context && e.context.type == 'pattern'
              ? d(e)
              : /atom|string|variable/.test(t) &&
                e.context &&
                (/[\}\]]/.test(e.context.type)
                  ? p(e, 'pattern', n.column())
                  : e.context.type == 'pattern' &&
                    !e.context.align &&
                    ((e.context.align = !0), (e.context.col = n.column())));
          return t;
        },
        indent: function (n, e) {
          var t = e && e.charAt(0),
            r = n.context;
          if (/[\]\}]/.test(t)) for (; r && r.type == 'pattern'; ) r = r.prev;
          var u = r && t == r.type;
          return r
            ? r.type == 'pattern'
              ? r.col
              : r.align
                ? r.col + (u ? 0 : 1)
                : r.indent + (u ? 0 : c)
            : 0;
        },
        lineComment: '#',
      };
    }),
      i.defineMIME('text/turtle', 'turtle');
  });
})();
var y = s.exports;
const j = b(y),
  _ = w({ __proto__: null, default: j }, [y]);
export { _ as t };
