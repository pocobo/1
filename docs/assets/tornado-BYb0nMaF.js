import { b as c } from './antd-BmrhB3rb.js';
import { r as l } from './index-Ck6h_6RS.js';
import { r as p } from './htmlmixed-sKS1wXfB.js';
import { r as m } from './overlay-XNxaH2Br.js';
function x(u, f) {
  for (var e = 0; e < f.length; e++) {
    const t = f[e];
    if (typeof t != 'string' && !Array.isArray(t)) {
      for (const n in t)
        if (n !== 'default' && !(n in u)) {
          const a = Object.getOwnPropertyDescriptor(t, n);
          a && Object.defineProperty(u, n, a.get ? a : { enumerable: !0, get: () => t[n] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }));
}
var g = { exports: {} };
(function (u, f) {
  (function (e) {
    e(l(), p(), m());
  })(function (e) {
    e.defineMode('tornado:inner', function () {
      var t = [
        'and',
        'as',
        'assert',
        'autoescape',
        'block',
        'break',
        'class',
        'comment',
        'context',
        'continue',
        'datetime',
        'def',
        'del',
        'elif',
        'else',
        'end',
        'escape',
        'except',
        'exec',
        'extends',
        'false',
        'finally',
        'for',
        'from',
        'global',
        'if',
        'import',
        'in',
        'include',
        'is',
        'json_encode',
        'lambda',
        'length',
        'linkify',
        'load',
        'module',
        'none',
        'not',
        'or',
        'pass',
        'print',
        'put',
        'raise',
        'raw',
        'return',
        'self',
        'set',
        'squeeze',
        'super',
        'true',
        'try',
        'url_escape',
        'while',
        'with',
        'without',
        'xhtml_escape',
        'yield',
      ];
      t = new RegExp('^((' + t.join(')|(') + '))\\b');
      function n(r, o) {
        r.eatWhile(/[^\{]/);
        var i = r.next();
        if (i == '{' && (i = r.eat(/\{|%|#/))) return (o.tokenize = a(i)), 'tag';
      }
      function a(r) {
        return (
          r == '{' && (r = '}'),
          function (o, i) {
            var d = o.next();
            return d == r && o.eat('}')
              ? ((i.tokenize = n), 'tag')
              : o.match(t)
                ? 'keyword'
                : r == '#'
                  ? 'comment'
                  : 'string';
          }
        );
      }
      return {
        startState: function () {
          return { tokenize: n };
        },
        token: function (r, o) {
          return o.tokenize(r, o);
        },
      };
    }),
      e.defineMode('tornado', function (t) {
        var n = e.getMode(t, 'text/html'),
          a = e.getMode(t, 'tornado:inner');
        return e.overlayMode(n, a);
      }),
      e.defineMIME('text/x-tornado', 'tornado');
  });
})();
var s = g.exports;
const y = c(s),
  w = x({ __proto__: null, default: y }, [s]);
export { w as t };
