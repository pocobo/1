import { b as _ } from './antd-BmrhB3rb.js';
import { r as g } from './index-Ck6h_6RS.js';
function z(c, a) {
  for (var o = 0; o < a.length; o++) {
    const i = a[o];
    if (typeof i != 'string' && !Array.isArray(i)) {
      for (const u in i)
        if (u !== 'default' && !(u in c)) {
          const f = Object.getOwnPropertyDescriptor(i, u);
          f && Object.defineProperty(c, u, f.get ? f : { enumerable: !0, get: () => i[u] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: 'Module' }));
}
var E = { exports: {} };
(function (c, a) {
  (function (o) {
    o(g());
  })(function (o) {
    o.defineMode('fcl', function (i) {
      var u = i.indentUnit,
        f = {
          term: !0,
          method: !0,
          accu: !0,
          rule: !0,
          then: !0,
          is: !0,
          and: !0,
          or: !0,
          if: !0,
          default: !0,
        },
        m = {
          var_input: !0,
          var_output: !0,
          fuzzify: !0,
          defuzzify: !0,
          function_block: !0,
          ruleblock: !0,
        },
        d = {
          end_ruleblock: !0,
          end_defuzzify: !0,
          end_function_block: !0,
          end_fuzzify: !0,
          end_var: !0,
        },
        k = { true: !0, false: !0, nan: !0, real: !0, min: !0, max: !0, cog: !0, cogs: !0 },
        b = /[+\-*&^%:=<>!|\/]/;
      function p(e, r) {
        var t = e.next();
        if (/[\d\.]/.test(t))
          return (
            t == '.'
              ? e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/)
              : t == '0'
                ? e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^0[0-7]+/)
                : e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),
            'number'
          );
        if (t == '/' || t == '(') {
          if (e.eat('*')) return (r.tokenize = s), s(e, r);
          if (e.eat('/')) return e.skipToEnd(), 'comment';
        }
        if (b.test(t)) return e.eatWhile(b), 'operator';
        e.eatWhile(/[\w\$_\xa1-\uffff]/);
        var n = e.current().toLowerCase();
        return f.propertyIsEnumerable(n) || m.propertyIsEnumerable(n) || d.propertyIsEnumerable(n)
          ? 'keyword'
          : k.propertyIsEnumerable(n)
            ? 'atom'
            : 'variable';
      }
      function s(e, r) {
        for (var t = !1, n; (n = e.next()); ) {
          if ((n == '/' || n == ')') && t) {
            r.tokenize = p;
            break;
          }
          t = n == '*';
        }
        return 'comment';
      }
      function x(e, r, t, n, l) {
        (this.indented = e), (this.column = r), (this.type = t), (this.align = n), (this.prev = l);
      }
      function y(e, r, t) {
        return (e.context = new x(e.indented, r, t, null, e.context));
      }
      function h(e) {
        if (e.context.prev) {
          var r = e.context.type;
          return (
            r == 'end_block' && (e.indented = e.context.indented), (e.context = e.context.prev)
          );
        }
      }
      return {
        startState: function (e) {
          return {
            tokenize: null,
            context: new x((e || 0) - u, 0, 'top', !1),
            indented: 0,
            startOfLine: !0,
          };
        },
        token: function (e, r) {
          var t = r.context;
          if (
            (e.sol() &&
              (t.align == null && (t.align = !1),
              (r.indented = e.indentation()),
              (r.startOfLine = !0)),
            e.eatSpace())
          )
            return null;
          var n = (r.tokenize || p)(e, r);
          if (n == 'comment') return n;
          t.align == null && (t.align = !0);
          var l = e.current().toLowerCase();
          return (
            m.propertyIsEnumerable(l)
              ? y(r, e.column(), 'end_block')
              : d.propertyIsEnumerable(l) && h(r),
            (r.startOfLine = !1),
            n
          );
        },
        indent: function (e, r) {
          if (e.tokenize != p && e.tokenize != null) return 0;
          var t = e.context,
            n = d.propertyIsEnumerable(r);
          return t.align ? t.column + (n ? 0 : 1) : t.indented + (n ? 0 : u);
        },
        electricChars: 'ryk',
        fold: 'brace',
        blockCommentStart: '(*',
        blockCommentEnd: '*)',
        lineComment: '//',
      };
    }),
      o.defineMIME('text/x-fcl', 'fcl');
  });
})();
var v = E.exports;
const C = _(v),
  I = z({ __proto__: null, default: C }, [v]);
export { I as f };
