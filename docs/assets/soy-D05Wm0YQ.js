import { b as P } from './antd-BmrhB3rb.js';
import { r as F } from './index-Ck6h_6RS.js';
import { r as z } from './htmlmixed-sKS1wXfB.js';
function D(v, g) {
  for (var l = 0; l < g.length; l++) {
    const o = g[l];
    if (typeof o != 'string' && !Array.isArray(o)) {
      for (const i in o)
        if (i !== 'default' && !(i in v)) {
          const h = Object.getOwnPropertyDescriptor(o, i);
          h && Object.defineProperty(v, i, h.get ? h : { enumerable: !0, get: () => o[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(v, Symbol.toStringTag, { value: 'Module' }));
}
var H = { exports: {} };
(function (v, g) {
  (function (l) {
    l(F(), z());
  })(function (l) {
    var o = { noEndTag: !0, soyState: 'param-def' },
      i = {
        alias: { noEndTag: !0 },
        delpackage: { noEndTag: !0 },
        namespace: { noEndTag: !0, soyState: 'namespace-def' },
        '@attribute': o,
        '@attribute?': o,
        '@param': o,
        '@param?': o,
        '@inject': o,
        '@inject?': o,
        '@state': o,
        template: { soyState: 'templ-def', variableScope: !0 },
        extern: { soyState: 'param-def' },
        export: { soyState: 'export' },
        literal: {},
        msg: {},
        fallbackmsg: { noEndTag: !0, reduceIndent: !0 },
        select: {},
        plural: {},
        let: { soyState: 'var-def' },
        if: {},
        javaimpl: {},
        jsimpl: {},
        elseif: { noEndTag: !0, reduceIndent: !0 },
        else: { noEndTag: !0, reduceIndent: !0 },
        switch: {},
        case: { noEndTag: !0, reduceIndent: !0 },
        default: { noEndTag: !0, reduceIndent: !0 },
        foreach: { variableScope: !0, soyState: 'for-loop' },
        ifempty: { noEndTag: !0, reduceIndent: !0 },
        for: { variableScope: !0, soyState: 'for-loop' },
        call: { soyState: 'templ-ref' },
        param: { soyState: 'param-ref' },
        print: { noEndTag: !0 },
        deltemplate: { soyState: 'templ-def', variableScope: !0 },
        delcall: { soyState: 'templ-ref' },
        log: {},
        element: { variableScope: !0 },
        velog: {},
        const: { soyState: 'const-def' },
      },
      h = Object.keys(i).filter(function (r) {
        return !i[r].noEndTag || i[r].reduceIndent;
      });
    l.defineMode(
      'soy',
      function (r) {
        var b = l.getMode(r, 'text/plain'),
          x = {
            html: l.getMode(r, {
              name: 'text/html',
              multilineTagIndentFactor: 2,
              multilineTagIndentPastTag: !1,
              allowMissingTagName: !0,
            }),
            attributes: b,
            text: b,
            uri: b,
            trusted_resource_uri: b,
            css: l.getMode(r, 'text/css'),
            js: l.getMode(r, { name: 'text/javascript', statementIndent: 2 * r.indentUnit }),
          };
        function f(n) {
          return n[n.length - 1];
        }
        function E(n, e, t) {
          if (n.sol()) {
            for (var u = 0; u < e.indent && n.eat(/\s/); u++);
            if (u) return null;
          }
          var d = n.string,
            a = t.exec(d.substr(n.pos));
          a && (n.string = d.substr(0, n.pos + a.index));
          var p = n.hideFirstChars(e.indent, function () {
            var c = f(e.localStates);
            return c.mode.token(n, c.state);
          });
          return (n.string = d), p;
        }
        function O(n, e) {
          for (; n; ) {
            if (n.element === e) return !0;
            n = n.next;
          }
          return !1;
        }
        function S(n, e) {
          return { element: e, next: n };
        }
        function w(n) {
          n.context &&
            (n.context.scope && (n.variables = n.context.scope),
            (n.context = n.context.previousContext));
        }
        function j(n, e, t) {
          return O(n, e) ? 'variable-2' : t ? 'variable' : 'variable-2 error';
        }
        function k(n, e, t) {
          (this.previousContext = n), (this.tag = e), (this.kind = null), (this.scope = t);
        }
        function m(n, e) {
          var t;
          return n.match(/[[]/)
            ? (e.soyState.push('list-literal'),
              (e.context = new k(e.context, 'list-literal', e.variables)),
              (e.lookupVariables = !1),
              null)
            : n.match(/\bmap(?=\()/)
              ? (e.soyState.push('map-literal'), 'keyword')
              : n.match(/\brecord(?=\()/)
                ? (e.soyState.push('record-literal'), 'keyword')
                : n.match(/([\w]+)(?=\()/)
                  ? 'variable callee'
                  : (t = n.match(/^["']/))
                    ? (e.soyState.push('string'), (e.quoteKind = t[0]), 'string')
                    : n.match(/^[(]/)
                      ? (e.soyState.push('open-parentheses'), null)
                      : n.match(/(null|true|false)(?!\w)/) ||
                          n.match(/0x([0-9a-fA-F]{2,})/) ||
                          n.match(/-?([0-9]*[.])?[0-9]+(e[0-9]*)?/)
                        ? 'atom'
                        : n.match(/(\||[+\-*\/%]|[=!]=|\?:|[<>]=?)/)
                          ? 'operator'
                          : (t = n.match(/^\$([\w]+)/))
                            ? j(e.variables, t[1], !e.lookupVariables)
                            : (t = n.match(/^\w+/))
                              ? /^(?:as|and|or|not|in|if)$/.test(t[0])
                                ? 'keyword'
                                : null
                              : (n.next(), null);
        }
        return {
          startState: function () {
            return {
              soyState: [],
              variables: S(null, 'ij'),
              scopes: null,
              indent: 0,
              quoteKind: null,
              context: null,
              lookupVariables: !0,
              localStates: [{ mode: x.html, state: l.startState(x.html) }],
            };
          },
          copyState: function (n) {
            return {
              tag: n.tag,
              soyState: n.soyState.concat([]),
              variables: n.variables,
              context: n.context,
              indent: n.indent,
              quoteKind: n.quoteKind,
              lookupVariables: n.lookupVariables,
              localStates: n.localStates.map(function (e) {
                return { mode: e.mode, state: l.copyState(e.mode, e.state) };
              }),
            };
          },
          token: function (n, e) {
            var t;
            switch (f(e.soyState)) {
              case 'comment':
                if (
                  (n.match(/^.*?\*\//) ? e.soyState.pop() : n.skipToEnd(),
                  !e.context || !e.context.scope)
                )
                  for (var u = /@param\??\s+(\S+)/g, d = n.current(), t; (t = u.exec(d)); )
                    e.variables = S(e.variables, t[1]);
                return 'comment';
              case 'string':
                var t = n.match(/^.*?(["']|\\[\s\S])/);
                return (
                  t
                    ? t[1] == e.quoteKind && ((e.quoteKind = null), e.soyState.pop())
                    : n.skipToEnd(),
                  'string'
                );
            }
            if (!e.soyState.length || f(e.soyState) != 'literal') {
              if (n.match(/^\/\*/)) return e.soyState.push('comment'), 'comment';
              if (n.match(n.sol() ? /^\s*\/\/.*/ : /^\s+\/\/.*/)) return 'comment';
            }
            switch (f(e.soyState)) {
              case 'templ-def':
                return (t = n.match(/^\.?([\w]+(?!\.[\w]+)*)/))
                  ? (e.soyState.pop(), 'def')
                  : (n.next(), null);
              case 'templ-ref':
                return (t = n.match(/(\.?[a-zA-Z_][a-zA-Z_0-9]+)+/))
                  ? (e.soyState.pop(), t[0][0] == '.' ? 'variable-2' : 'variable')
                  : (t = n.match(/^\$([\w]+)/))
                    ? (e.soyState.pop(), j(e.variables, t[1], !e.lookupVariables))
                    : (n.next(), null);
              case 'namespace-def':
                return (t = n.match(/^\.?([\w\.]+)/))
                  ? (e.soyState.pop(), 'variable')
                  : (n.next(), null);
              case 'param-def':
                return (t = n.match(/^\*/))
                  ? (e.soyState.pop(), e.soyState.push('param-type'), 'type')
                  : (t = n.match(/^\w+/))
                    ? ((e.variables = S(e.variables, t[0])),
                      e.soyState.pop(),
                      e.soyState.push('param-type'),
                      'def')
                    : (n.next(), null);
              case 'param-ref':
                return (t = n.match(/^\w+/)) ? (e.soyState.pop(), 'property') : (n.next(), null);
              case 'open-parentheses':
                return n.match(/[)]/) ? (e.soyState.pop(), null) : m(n, e);
              case 'param-type':
                var a = n.peek();
                return '}]=>,'.indexOf(a) != -1
                  ? (e.soyState.pop(), null)
                  : a == '['
                    ? (e.soyState.push('param-type-record'), null)
                    : a == '('
                      ? (e.soyState.push('param-type-template'), null)
                      : a == '<'
                        ? (e.soyState.push('param-type-parameter'), null)
                        : (t = n.match(/^([\w]+|[?])/))
                          ? 'type'
                          : (n.next(), null);
              case 'param-type-record':
                var a = n.peek();
                return a == ']'
                  ? (e.soyState.pop(), null)
                  : n.match(/^\w+/)
                    ? (e.soyState.push('param-type'), 'property')
                    : (n.next(), null);
              case 'param-type-parameter':
                return n.match(/^[>]/)
                  ? (e.soyState.pop(), null)
                  : n.match(/^[<,]/)
                    ? (e.soyState.push('param-type'), null)
                    : (n.next(), null);
              case 'param-type-template':
                return n.match(/[>]/)
                  ? (e.soyState.pop(), e.soyState.push('param-type'), null)
                  : n.match(/^\w+/)
                    ? (e.soyState.push('param-type'), 'def')
                    : (n.next(), null);
              case 'var-def':
                return (t = n.match(/^\$([\w]+)/))
                  ? ((e.variables = S(e.variables, t[1])), e.soyState.pop(), 'def')
                  : (n.next(), null);
              case 'for-loop':
                return n.match(/\bin\b/)
                  ? (e.soyState.pop(), 'keyword')
                  : n.peek() == '$'
                    ? (e.soyState.push('var-def'), null)
                    : (n.next(), null);
              case 'record-literal':
                return n.match(/^[)]/)
                  ? (e.soyState.pop(), null)
                  : n.match(/[(,]/)
                    ? (e.soyState.push('map-value'), e.soyState.push('record-key'), null)
                    : (n.next(), null);
              case 'map-literal':
                return n.match(/^[)]/)
                  ? (e.soyState.pop(), null)
                  : n.match(/[(,]/)
                    ? (e.soyState.push('map-value'), e.soyState.push('map-value'), null)
                    : (n.next(), null);
              case 'list-literal':
                return n.match(']')
                  ? (e.soyState.pop(), (e.lookupVariables = !0), w(e), null)
                  : n.match(/\bfor\b/)
                    ? ((e.lookupVariables = !0), e.soyState.push('for-loop'), 'keyword')
                    : m(n, e);
              case 'record-key':
                return n.match(/[\w]+/)
                  ? 'property'
                  : n.match(/^[:]/)
                    ? (e.soyState.pop(), null)
                    : (n.next(), null);
              case 'map-value':
                return n.peek() == ')' || n.peek() == ',' || n.match(/^[:)]/)
                  ? (e.soyState.pop(), null)
                  : m(n, e);
              case 'import':
                return n.eat(';')
                  ? (e.soyState.pop(), (e.indent -= 2 * r.indentUnit), null)
                  : n.match(/\w+(?=\s+as\b)/)
                    ? 'variable'
                    : (t = n.match(/\w+/))
                      ? /\b(from|as)\b/.test(t[0])
                        ? 'keyword'
                        : 'def'
                      : (t = n.match(/^["']/))
                        ? (e.soyState.push('string'), (e.quoteKind = t[0]), 'string')
                        : (n.next(), null);
              case 'tag':
                var p, c;
                e.tag === void 0
                  ? ((p = !0), (c = ''))
                  : ((p = e.tag[0] == '/'), (c = p ? e.tag.substring(1) : e.tag));
                var y = i[c];
                if (n.match(/^\/?}/)) {
                  var I = n.current() == '/}';
                  return (
                    I && !p && w(e),
                    e.tag == '/template' || e.tag == '/deltemplate'
                      ? ((e.variables = S(null, 'ij')), (e.indent = 0))
                      : (e.indent -= r.indentUnit * (I || h.indexOf(e.tag) == -1 ? 2 : 1)),
                    e.soyState.pop(),
                    'keyword'
                  );
                } else if (n.match(/^([\w?]+)(?==)/)) {
                  if (
                    e.context &&
                    e.context.tag == c &&
                    n.current() == 'kind' &&
                    (t = n.match(/^="([^"]+)/, !1))
                  ) {
                    var U = t[1];
                    e.context.kind = U;
                    var $ = x[U] || x.html,
                      s = f(e.localStates);
                    s.mode.indent && (e.indent += s.mode.indent(s.state, '', '')),
                      e.localStates.push({ mode: $, state: l.startState($) });
                  }
                  return 'attribute';
                }
                return m(n, e);
              case 'template-call-expression':
                return n.match(/^([\w-?]+)(?==)/)
                  ? 'attribute'
                  : n.eat('>') || n.eat('/>')
                    ? (e.soyState.pop(), 'keyword')
                    : m(n, e);
              case 'literal':
                return n.match('{/literal}', !1)
                  ? (e.soyState.pop(), this.token(n, e))
                  : E(n, e, /\{\/literal}/);
              case 'export':
                if ((t = n.match(/\w+/))) {
                  if ((e.soyState.pop(), t == 'const'))
                    return e.soyState.push('const-def'), 'keyword';
                  if (t == 'extern') return e.soyState.push('param-def'), 'keyword';
                } else n.next();
                return null;
              case 'const-def':
                return n.match(/^\w+/) ? (e.soyState.pop(), 'def') : (n.next(), null);
            }
            if (n.match('{literal}'))
              return (
                (e.indent += r.indentUnit),
                e.soyState.push('literal'),
                (e.context = new k(e.context, 'literal', e.variables)),
                'keyword'
              );
            if ((t = n.match(/^\{([/@\\]?\w+\??)(?=$|[\s}]|\/[/*])/))) {
              var _ = e.tag;
              e.tag = t[1];
              var p = e.tag[0] == '/',
                V = !!i[e.tag],
                c = p ? e.tag.substring(1) : e.tag,
                y = i[c];
              e.tag != '/switch' &&
                (e.indent +=
                  ((p || (y && y.reduceIndent)) && _ != 'switch' ? 1 : 2) * r.indentUnit),
                e.soyState.push('tag');
              var T = !1;
              if (y) {
                if ((p || (y.soyState && e.soyState.push(y.soyState)), !y.noEndTag && (V || !p)))
                  e.context = new k(e.context, e.tag, y.variableScope ? e.variables : null);
                else if (p) {
                  var K = c == 'extern' && e.context && e.context.tag == 'export';
                  if (!e.context || (e.context.tag != c && !K)) T = !0;
                  else if (e.context) {
                    if (e.context.kind) {
                      e.localStates.pop();
                      var s = f(e.localStates);
                      s.mode.indent && (e.indent -= s.mode.indent(s.state, '', ''));
                    }
                    w(e);
                  }
                }
              } else p && (T = !0);
              return (T ? 'error ' : '') + 'keyword';
            } else {
              if (n.eat('{'))
                return (
                  (e.tag = 'print'),
                  (e.indent += 2 * r.indentUnit),
                  e.soyState.push('tag'),
                  'keyword'
                );
              if (!e.context && n.sol() && n.match(/import\b/))
                return e.soyState.push('import'), (e.indent += 2 * r.indentUnit), 'keyword';
              if ((t = n.match('<{')))
                return (
                  e.soyState.push('template-call-expression'),
                  (e.indent += 2 * r.indentUnit),
                  e.soyState.push('tag'),
                  'keyword'
                );
              if ((t = n.match('</>'))) return (e.indent -= 1 * r.indentUnit), 'keyword';
            }
            return E(n, e, /\{|\s+\/\/|\/\*/);
          },
          indent: function (n, e, t) {
            var u = n.indent,
              d = f(n.soyState);
            if (d == 'comment') return l.Pass;
            if (d == 'literal') /^\{\/literal}/.test(e) && (u -= r.indentUnit);
            else {
              if (/^\s*\{\/(template|deltemplate)\b/.test(e)) return 0;
              /^\{(\/|(fallbackmsg|elseif|else|ifempty)\b)/.test(e) && (u -= r.indentUnit),
                n.tag != 'switch' && /^\{(case|default)\b/.test(e) && (u -= r.indentUnit),
                /^\{\/switch\b/.test(e) && (u -= r.indentUnit);
            }
            var a = f(n.localStates);
            return u && a.mode.indent && (u += a.mode.indent(a.state, e, t)), u;
          },
          innerMode: function (n) {
            return n.soyState.length && f(n.soyState) != 'literal' ? null : f(n.localStates);
          },
          electricInput:
            /^\s*\{(\/|\/template|\/deltemplate|\/switch|fallbackmsg|elseif|else|case|default|ifempty|\/literal\})$/,
          lineComment: '//',
          blockCommentStart: '/*',
          blockCommentEnd: '*/',
          blockCommentContinue: ' * ',
          useInnerComments: !1,
          fold: 'indent',
        };
      },
      'htmlmixed',
    ),
      l.registerHelper('wordChars', 'soy', /[\w$]/),
      l.registerHelper('hintWords', 'soy', Object.keys(i).concat(['css', 'debugger'])),
      l.defineMIME('text/x-soy', 'soy');
  });
})();
var q = H.exports;
const Z = P(q),
  G = D({ __proto__: null, default: Z }, [q]);
export { G as s };
