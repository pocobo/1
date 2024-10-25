import { b as Z } from './antd-BmrhB3rb.js';
import { r as C } from './index-Ck6h_6RS.js';
function N(v, a) {
  for (var c = 0; c < a.length; c++) {
    const p = a[c];
    if (typeof p != 'string' && !Array.isArray(p)) {
      for (const u in p)
        if (u !== 'default' && !(u in v)) {
          const l = Object.getOwnPropertyDescriptor(p, u);
          l && Object.defineProperty(v, u, l.get ? l : { enumerable: !0, get: () => p[u] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(v, Symbol.toStringTag, { value: 'Module' }));
}
var T = { exports: {} };
(function (v, a) {
  (function (c) {
    c(C());
  })(function (c) {
    c.defineMode('coffeescript', function (p, u) {
      var l = 'error';
      function h(e) {
        return new RegExp('^((' + e.join(')|(') + '))\\b');
      }
      var z =
          /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,
        s = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/,
        x = /^[_A-Za-z$][_A-Za-z$0-9]*/,
        A = /^@[_A-Za-z$][_A-Za-z$0-9]*/,
        E = h(['and', 'or', 'not', 'is', 'isnt', 'in', 'instanceof', 'typeof']),
        g = [
          'for',
          'while',
          'loop',
          'if',
          'unless',
          'else',
          'switch',
          'try',
          'catch',
          'finally',
          'class',
        ],
        O = [
          'break',
          'by',
          'continue',
          'debugger',
          'delete',
          'do',
          'in',
          'of',
          'new',
          'return',
          'then',
          'this',
          '@',
          'throw',
          'when',
          'until',
          'extends',
        ],
        _ = h(g.concat(O));
      g = h(g);
      var S = /^('{3}|\"{3}|['\"])/,
        j = /^(\/{3}|\/)/,
        P = ['Infinity', 'NaN', 'undefined', 'null', 'true', 'false', 'on', 'off', 'yes', 'no'],
        $ = h(P);
      function d(e, n) {
        if (e.sol()) {
          n.scope.align === null && (n.scope.align = !1);
          var r = n.scope.offset;
          if (e.eatSpace()) {
            var f = e.indentation();
            return f > r && n.scope.type == 'coffee' ? 'indent' : f < r ? 'dedent' : null;
          } else r > 0 && y(e, n);
        }
        if (e.eatSpace()) return null;
        var i = e.peek();
        if (e.match('####')) return e.skipToEnd(), 'comment';
        if (e.match('###')) return (n.tokenize = M), n.tokenize(e, n);
        if (i === '#') return e.skipToEnd(), 'comment';
        if (e.match(/^-?[0-9\.]/, !1)) {
          var t = !1;
          if (
            (e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i) && (t = !0),
            e.match(/^-?\d+\.\d*/) && (t = !0),
            e.match(/^-?\.\d+/) && (t = !0),
            t)
          )
            return e.peek() == '.' && e.backUp(1), 'number';
          var o = !1;
          if (
            (e.match(/^-?0x[0-9a-f]+/i) && (o = !0),
            e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/) && (o = !0),
            e.match(/^-?0(?![\dx])/i) && (o = !0),
            o)
          )
            return 'number';
        }
        if (e.match(S)) return (n.tokenize = b(e.current(), !1, 'string')), n.tokenize(e, n);
        if (e.match(j)) {
          if (e.current() != '/' || e.match(/^.*\//, !1))
            return (n.tokenize = b(e.current(), !0, 'string-2')), n.tokenize(e, n);
          e.backUp(1);
        }
        return e.match(z) || e.match(E)
          ? 'operator'
          : e.match(s)
            ? 'punctuation'
            : e.match($)
              ? 'atom'
              : e.match(A) || (n.prop && e.match(x))
                ? 'property'
                : e.match(_)
                  ? 'keyword'
                  : e.match(x)
                    ? 'variable'
                    : (e.next(), l);
      }
      function b(e, n, r) {
        return function (f, i) {
          for (; !f.eol(); )
            if ((f.eatWhile(/[^'"\/\\]/), f.eat('\\'))) {
              if ((f.next(), n && f.eol())) return r;
            } else {
              if (f.match(e)) return (i.tokenize = d), r;
              f.eat(/['"\/]/);
            }
          return n && (u.singleLineStringErrors ? (r = l) : (i.tokenize = d)), r;
        };
      }
      function M(e, n) {
        for (; !e.eol(); ) {
          if ((e.eatWhile(/[^#]/), e.match('###'))) {
            n.tokenize = d;
            break;
          }
          e.eatWhile('#');
        }
        return 'comment';
      }
      function k(e, n, r) {
        r = r || 'coffee';
        for (var f = 0, i = !1, t = null, o = n.scope; o; o = o.prev)
          if (o.type === 'coffee' || o.type == '}') {
            f = o.offset + p.indentUnit;
            break;
          }
        r !== 'coffee'
          ? ((i = null), (t = e.column() + e.current().length))
          : n.scope.align && (n.scope.align = !1),
          (n.scope = { offset: f, type: r, prev: n.scope, align: i, alignOffset: t });
      }
      function y(e, n) {
        if (n.scope.prev)
          if (n.scope.type === 'coffee') {
            for (var r = e.indentation(), f = !1, i = n.scope; i; i = i.prev)
              if (r === i.offset) {
                f = !0;
                break;
              }
            if (!f) return !0;
            for (; n.scope.prev && n.scope.offset !== r; ) n.scope = n.scope.prev;
            return !1;
          } else return (n.scope = n.scope.prev), !1;
      }
      function R(e, n) {
        var r = n.tokenize(e, n),
          f = e.current();
        f === 'return' && (n.dedent = !0),
          (((f === '->' || f === '=>') && e.eol()) || r === 'indent') && k(e, n);
        var i = '[({'.indexOf(f);
        if (
          (i !== -1 && k(e, n, '])}'.slice(i, i + 1)),
          g.exec(f) && k(e, n),
          f == 'then' && y(e, n),
          r === 'dedent' && y(e, n))
        )
          return l;
        if (((i = '])}'.indexOf(f)), i !== -1)) {
          for (; n.scope.type == 'coffee' && n.scope.prev; ) n.scope = n.scope.prev;
          n.scope.type == f && (n.scope = n.scope.prev);
        }
        return (
          n.dedent &&
            e.eol() &&
            (n.scope.type == 'coffee' && n.scope.prev && (n.scope = n.scope.prev), (n.dedent = !1)),
          r
        );
      }
      var I = {
        startState: function (e) {
          return {
            tokenize: d,
            scope: { offset: e || 0, type: 'coffee', prev: null, align: !1 },
            prop: !1,
            dedent: 0,
          };
        },
        token: function (e, n) {
          var r = n.scope.align === null && n.scope;
          r && e.sol() && (r.align = !1);
          var f = R(e, n);
          return (
            f &&
              f != 'comment' &&
              (r && (r.align = !0), (n.prop = f == 'punctuation' && e.current() == '.')),
            f
          );
        },
        indent: function (e, n) {
          if (e.tokenize != d) return 0;
          var r = e.scope,
            f = n && '])}'.indexOf(n.charAt(0)) > -1;
          if (f) for (; r.type == 'coffee' && r.prev; ) r = r.prev;
          var i = f && r.type === n.charAt(0);
          return r.align ? r.alignOffset - (i ? 1 : 0) : (i ? r.prev : r).offset;
        },
        lineComment: '#',
        fold: 'indent',
      };
      return I;
    }),
      c.defineMIME('application/vnd.coffeescript', 'coffeescript'),
      c.defineMIME('text/x-coffeescript', 'coffeescript'),
      c.defineMIME('text/coffeescript', 'coffeescript');
  });
})();
var w = T.exports;
const U = Z(w),
  F = N({ __proto__: null, default: U }, [w]);
export { w as a, F as c };
