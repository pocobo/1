import { b as x } from './antd-BmrhB3rb.js';
import { r as v } from './index-Ck6h_6RS.js';
function h($, u) {
  for (var t = 0; t < u.length; t++) {
    const o = u[t];
    if (typeof o != 'string' && !Array.isArray(o)) {
      for (const i in o)
        if (i !== 'default' && !(i in $)) {
          const c = Object.getOwnPropertyDescriptor(o, i);
          c && Object.defineProperty($, i, c.get ? c : { enumerable: !0, get: () => o[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty($, Symbol.toStringTag, { value: 'Module' }));
}
var k = { exports: {} };
(function ($, u) {
  (function (t) {
    t(v());
  })(function (t) {
    t.defineMode('mumps', function () {
      function o(e) {
        return new RegExp('^((' + e.join(')|(') + '))\\b', 'i');
      }
      var i = new RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]"),
        c = new RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))"),
        f = new RegExp('^[\\.,:]'),
        l = new RegExp('[()]'),
        d = new RegExp('^[%A-Za-z][A-Za-z0-9]*'),
        m = [
          'break',
          'close',
          'do',
          'else',
          'for',
          'goto',
          'halt',
          'hang',
          'if',
          'job',
          'kill',
          'lock',
          'merge',
          'new',
          'open',
          'quit',
          'read',
          'set',
          'tcommit',
          'trollback',
          'tstart',
          'use',
          'view',
          'write',
          'xecute',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'q',
          'r',
          's',
          'tc',
          'tro',
          'ts',
          'u',
          'v',
          'w',
          'x',
        ],
        s = [
          '\\$ascii',
          '\\$char',
          '\\$data',
          '\\$ecode',
          '\\$estack',
          '\\$etrap',
          '\\$extract',
          '\\$find',
          '\\$fnumber',
          '\\$get',
          '\\$horolog',
          '\\$io',
          '\\$increment',
          '\\$job',
          '\\$justify',
          '\\$length',
          '\\$name',
          '\\$next',
          '\\$order',
          '\\$piece',
          '\\$qlength',
          '\\$qsubscript',
          '\\$query',
          '\\$quit',
          '\\$random',
          '\\$reverse',
          '\\$select',
          '\\$stack',
          '\\$test',
          '\\$text',
          '\\$translate',
          '\\$view',
          '\\$x',
          '\\$y',
          '\\$a',
          '\\$c',
          '\\$d',
          '\\$e',
          '\\$ec',
          '\\$es',
          '\\$et',
          '\\$f',
          '\\$fn',
          '\\$g',
          '\\$h',
          '\\$i',
          '\\$j',
          '\\$l',
          '\\$n',
          '\\$na',
          '\\$o',
          '\\$p',
          '\\$q',
          '\\$ql',
          '\\$qs',
          '\\$r',
          '\\$re',
          '\\$s',
          '\\$st',
          '\\$t',
          '\\$tr',
          '\\$v',
          '\\$z',
        ],
        p = o(s),
        g = o(m);
      function b(e, r) {
        e.sol() && ((r.label = !0), (r.commandMode = 0));
        var n = e.peek();
        return (
          n == ' ' || n == '	'
            ? ((r.label = !1),
              r.commandMode == 0
                ? (r.commandMode = 1)
                : (r.commandMode < 0 || r.commandMode == 2) && (r.commandMode = 0))
            : n != '.' &&
              r.commandMode > 0 &&
              (n == ':' ? (r.commandMode = -1) : (r.commandMode = 2)),
          (n === '(' || n === '	') && (r.label = !1),
          n === ';'
            ? (e.skipToEnd(), 'comment')
            : e.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/)
              ? 'number'
              : n == '"'
                ? e.skipTo('"')
                  ? (e.next(), 'string')
                  : (e.skipToEnd(), 'error')
                : e.match(c) || e.match(i)
                  ? 'operator'
                  : e.match(f)
                    ? null
                    : l.test(n)
                      ? (e.next(), 'bracket')
                      : r.commandMode > 0 && e.match(g)
                        ? 'variable-2'
                        : e.match(p)
                          ? 'builtin'
                          : e.match(d)
                            ? 'variable'
                            : n === '$' || n === '^'
                              ? (e.next(), 'builtin')
                              : n === '@'
                                ? (e.next(), 'string-2')
                                : /[\w%]/.test(n)
                                  ? (e.eatWhile(/[\w%]/), 'variable')
                                  : (e.next(), 'error')
        );
      }
      return {
        startState: function () {
          return { label: !1, commandMode: 0 };
        },
        token: function (e, r) {
          var n = b(e, r);
          return r.label ? 'tag' : n;
        },
      };
    }),
      t.defineMIME('text/x-mumps', 'mumps');
  });
})();
var a = k.exports;
const w = x(a),
  E = h({ __proto__: null, default: w }, [a]);
export { E as m };
