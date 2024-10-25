import { b as y } from './antd-BmrhB3rb.js';
import { r as w } from './index-Ck6h_6RS.js';
import { r as S } from './xml-w1k-fQXr.js';
import { a as E } from './javascript-CucwyKld.js';
function O(l, v) {
  for (var i = 0; i < v.length; i++) {
    const o = v[i];
    if (typeof o != 'string' && !Array.isArray(o)) {
      for (const f in o)
        if (f !== 'default' && !(f in l)) {
          const r = Object.getOwnPropertyDescriptor(o, f);
          r && Object.defineProperty(l, f, r.get ? r : { enumerable: !0, get: () => o[f] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: 'Module' }));
}
var T = { exports: {} };
(function (l, v) {
  (function (i) {
    i(w(), S(), E);
  })(function (i) {
    function o(r, c, s, a) {
      (this.state = r), (this.mode = c), (this.depth = s), (this.prev = a);
    }
    function f(r) {
      return new o(i.copyState(r.mode, r.state), r.mode, r.depth, r.prev && f(r.prev));
    }
    i.defineMode(
      'jsx',
      function (r, c) {
        var s = i.getMode(r, {
            name: 'xml',
            allowMissing: !0,
            multilineTagIndentPastTag: !1,
            allowMissingTagName: !0,
          }),
          a = i.getMode(r, (c && c.base) || 'javascript');
        function j(t) {
          var n = t.tagName;
          t.tagName = null;
          var e = s.indent(t, '', '');
          return (t.tagName = n), e;
        }
        function m(t, n) {
          return n.context.mode == s ? b(t, n, n.context) : x(t, n, n.context);
        }
        function b(t, n, e) {
          if (e.depth == 2) return t.match(/^.*?\*\//) ? (e.depth = 1) : t.skipToEnd(), 'comment';
          if (t.peek() == '{') {
            s.skipAttribute(e.state);
            var u = j(e.state),
              p = e.state.context;
            if (p && t.match(/^[^>]*>\s*$/, !1)) {
              for (; p.prev && !p.startOfLine; ) p = p.prev;
              p.startOfLine
                ? (u -= r.indentUnit)
                : e.prev.state.lexical && (u = e.prev.state.lexical.indented);
            } else e.depth == 1 && (u += r.indentUnit);
            return (n.context = new o(i.startState(a, u), a, 0, n.context)), null;
          }
          if (e.depth == 1) {
            if (t.peek() == '<')
              return (
                s.skipAttribute(e.state),
                (n.context = new o(i.startState(s, j(e.state)), s, 0, n.context)),
                null
              );
            if (t.match('//')) return t.skipToEnd(), 'comment';
            if (t.match('/*')) return (e.depth = 2), m(t, n);
          }
          var h = s.token(t, e.state),
            d = t.current(),
            g;
          return (
            /\btag\b/.test(h)
              ? />$/.test(d)
                ? e.state.context
                  ? (e.depth = 0)
                  : (n.context = n.context.prev)
                : /^</.test(d) && (e.depth = 1)
              : !h && (g = d.indexOf('{')) > -1 && t.backUp(d.length - g),
            h
          );
        }
        function x(t, n, e) {
          if (
            t.peek() == '<' &&
            !t.match(/^<([^<>]|<[^>]*>)+,\s*>/, !1) &&
            a.expressionAllowed(t, e.state)
          )
            return (
              (n.context = new o(i.startState(s, a.indent(e.state, '', '')), s, 0, n.context)),
              a.skipExpression(e.state),
              null
            );
          var u = a.token(t, e.state);
          if (!u && e.depth != null) {
            var p = t.current();
            p == '{' ? e.depth++ : p == '}' && --e.depth == 0 && (n.context = n.context.prev);
          }
          return u;
        }
        return {
          startState: function () {
            return { context: new o(i.startState(a), a) };
          },
          copyState: function (t) {
            return { context: f(t.context) };
          },
          token: m,
          indent: function (t, n, e) {
            return t.context.mode.indent(t.context.state, n, e);
          },
          innerMode: function (t) {
            return t.context;
          },
        };
      },
      'xml',
      'javascript',
    ),
      i.defineMIME('text/jsx', 'jsx'),
      i.defineMIME('text/typescript-jsx', {
        name: 'jsx',
        base: { name: 'javascript', typescript: !0 },
      });
  });
})();
var k = T.exports;
const N = y(k),
  P = O({ __proto__: null, default: N }, [k]);
export { P as j };
