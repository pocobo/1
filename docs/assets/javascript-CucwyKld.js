import { b as xe } from './antd-BmrhB3rb.js';
import { r as he } from './index-Ck6h_6RS.js';
function ve(Y, cr) {
  for (var b = 0; b < cr.length; b++) {
    const z = cr[b];
    if (typeof z != 'string' && !Array.isArray(z)) {
      for (const x in z)
        if (x !== 'default' && !(x in Y)) {
          const T = Object.getOwnPropertyDescriptor(z, x);
          T && Object.defineProperty(Y, x, T.get ? T : { enumerable: !0, get: () => z[x] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(Y, Symbol.toStringTag, { value: 'Module' }));
}
var ge = { exports: {} };
(function (Y, cr) {
  (function (b) {
    b(he());
  })(function (b) {
    b.defineMode('javascript', function (z, x) {
      var T = z.indentUnit,
        hr = x.statementIndent,
        Z = x.jsonld,
        M = x.json || Z,
        vr = x.trackScope !== !1,
        p = x.typescript,
        C = x.wordCharacters || /[\w$\xa1-\uffff]/,
        gr = (function () {
          function r(g) {
            return { type: g, style: 'keyword' };
          }
          var e = r('keyword a'),
            t = r('keyword b'),
            f = r('keyword c'),
            u = r('keyword d'),
            l = r('operator'),
            m = { type: 'atom', style: 'atom' };
          return {
            if: r('if'),
            while: e,
            with: e,
            else: t,
            do: t,
            try: t,
            finally: t,
            return: u,
            break: u,
            continue: u,
            new: r('new'),
            delete: f,
            void: f,
            throw: f,
            debugger: r('debugger'),
            var: r('var'),
            const: r('var'),
            let: r('var'),
            function: r('function'),
            catch: r('catch'),
            for: r('for'),
            switch: r('switch'),
            case: r('case'),
            default: r('default'),
            in: l,
            typeof: l,
            instanceof: l,
            true: m,
            false: m,
            null: m,
            undefined: m,
            NaN: m,
            Infinity: m,
            this: r('this'),
            class: r('class'),
            super: r('atom'),
            yield: f,
            export: r('export'),
            import: r('import'),
            extends: f,
            await: f,
          };
        })(),
        yr = /[+\-*&%=<>!?|~^@]/,
        Dr =
          /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
      function Jr(r) {
        for (var e = !1, t, f = !1; (t = r.next()) != null; ) {
          if (!e) {
            if (t == '/' && !f) return;
            t == '[' ? (f = !0) : f && t == ']' && (f = !1);
          }
          e = !e && t == '\\';
        }
      }
      var R, rr;
      function w(r, e, t) {
        return (R = r), (rr = t), e;
      }
      function O(r, e) {
        var t = r.next();
        if (t == '"' || t == "'") return (e.tokenize = Lr(t)), e.tokenize(r, e);
        if (t == '.' && r.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return w('number', 'number');
        if (t == '.' && r.match('..')) return w('spread', 'meta');
        if (/[\[\]{}\(\),;\:\.]/.test(t)) return w(t);
        if (t == '=' && r.eat('>')) return w('=>', 'operator');
        if (t == '0' && r.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
          return w('number', 'number');
        if (/\d/.test(t))
          return r.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), w('number', 'number');
        if (t == '/')
          return r.eat('*')
            ? ((e.tokenize = er), er(r, e))
            : r.eat('/')
              ? (r.skipToEnd(), w('comment', 'comment'))
              : Pr(r, e, 1)
                ? (Jr(r), r.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), w('regexp', 'string-2'))
                : (r.eat('='), w('operator', 'operator', r.current()));
        if (t == '`') return (e.tokenize = U), U(r, e);
        if (t == '#' && r.peek() == '!') return r.skipToEnd(), w('meta', 'meta');
        if (t == '#' && r.eatWhile(C)) return w('variable', 'property');
        if (
          (t == '<' && r.match('!--')) ||
          (t == '-' && r.match('->') && !/\S/.test(r.string.slice(0, r.start)))
        )
          return r.skipToEnd(), w('comment', 'comment');
        if (yr.test(t))
          return (
            (t != '>' || !e.lexical || e.lexical.type != '>') &&
              (r.eat('=')
                ? (t == '!' || t == '=') && r.eat('=')
                : /[<>*+\-|&?]/.test(t) && (r.eat(t), t == '>' && r.eat(t))),
            t == '?' && r.eat('.') ? w('.') : w('operator', 'operator', r.current())
          );
        if (C.test(t)) {
          r.eatWhile(C);
          var f = r.current();
          if (e.lastType != '.') {
            if (gr.propertyIsEnumerable(f)) {
              var u = gr[f];
              return w(u.type, u.style, f);
            }
            if (f == 'async' && r.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1))
              return w('async', 'keyword', f);
          }
          return w('variable', 'variable', f);
        }
      }
      function Lr(r) {
        return function (e, t) {
          var f = !1,
            u;
          if (Z && e.peek() == '@' && e.match(Dr))
            return (t.tokenize = O), w('jsonld-keyword', 'meta');
          for (; (u = e.next()) != null && !(u == r && !f); ) f = !f && u == '\\';
          return f || (t.tokenize = O), w('string', 'string');
        };
      }
      function er(r, e) {
        for (var t = !1, f; (f = r.next()); ) {
          if (f == '/' && t) {
            e.tokenize = O;
            break;
          }
          t = f == '*';
        }
        return w('comment', 'comment');
      }
      function U(r, e) {
        for (var t = !1, f; (f = r.next()) != null; ) {
          if (!t && (f == '`' || (f == '$' && r.eat('{')))) {
            e.tokenize = O;
            break;
          }
          t = !t && f == '\\';
        }
        return w('quasi', 'string-2', r.current());
      }
      var Qr = '([{}])';
      function lr(r, e) {
        e.fatArrowAt && (e.fatArrowAt = null);
        var t = r.string.indexOf('=>', r.start);
        if (!(t < 0)) {
          if (p) {
            var f = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(r.string.slice(r.start, t));
            f && (t = f.index);
          }
          for (var u = 0, l = !1, m = t - 1; m >= 0; --m) {
            var g = r.string.charAt(m),
              A = Qr.indexOf(g);
            if (A >= 0 && A < 3) {
              if (!u) {
                ++m;
                break;
              }
              if (--u == 0) {
                g == '(' && (l = !0);
                break;
              }
            } else if (A >= 3 && A < 6) ++u;
            else if (C.test(g)) l = !0;
            else if (/["'\/`]/.test(g))
              for (; ; --m) {
                if (m == 0) return;
                var we = r.string.charAt(m - 1);
                if (we == g && r.string.charAt(m - 2) != '\\') {
                  m--;
                  break;
                }
              }
            else if (l && !u) {
              ++m;
              break;
            }
          }
          l && !u && (e.fatArrowAt = m);
        }
      }
      var Rr = {
        atom: !0,
        number: !0,
        variable: !0,
        string: !0,
        regexp: !0,
        this: !0,
        import: !0,
        'jsonld-keyword': !0,
      };
      function jr(r, e, t, f, u, l) {
        (this.indented = r),
          (this.column = e),
          (this.type = t),
          (this.prev = u),
          (this.info = l),
          f != null && (this.align = f);
      }
      function Ur(r, e) {
        if (!vr) return !1;
        for (var t = r.localVars; t; t = t.next) if (t.name == e) return !0;
        for (var f = r.context; f; f = f.prev)
          for (var t = f.vars; t; t = t.next) if (t.name == e) return !0;
      }
      function Er(r, e, t, f, u) {
        var l = r.cc;
        for (
          i.state = r,
            i.stream = u,
            i.marked = null,
            i.cc = l,
            i.style = e,
            r.lexical.hasOwnProperty('align') || (r.lexical.align = !0);
          ;

        ) {
          var m = l.length ? l.pop() : M ? k : h;
          if (m(t, f)) {
            for (; l.length && l[l.length - 1].lex; ) l.pop()();
            return i.marked ? i.marked : t == 'variable' && Ur(r, f) ? 'variable-2' : e;
          }
        }
      }
      var i = { state: null, column: null, marked: null, cc: null };
      function o() {
        for (var r = arguments.length - 1; r >= 0; r--) i.cc.push(arguments[r]);
      }
      function n() {
        return o.apply(null, arguments), !0;
      }
      function dr(r, e) {
        for (var t = e; t; t = t.next) if (t.name == r) return !0;
        return !1;
      }
      function P(r) {
        var e = i.state;
        if (((i.marked = 'def'), !!vr)) {
          if (e.context) {
            if (e.lexical.info == 'var' && e.context && e.context.block) {
              var t = Tr(r, e.context);
              if (t != null) {
                e.context = t;
                return;
              }
            } else if (!dr(r, e.localVars)) {
              e.localVars = new K(r, e.localVars);
              return;
            }
          }
          x.globalVars && !dr(r, e.globalVars) && (e.globalVars = new K(r, e.globalVars));
        }
      }
      function Tr(r, e) {
        if (e)
          if (e.block) {
            var t = Tr(r, e.prev);
            return t ? (t == e.prev ? e : new W(t, e.vars, !0)) : null;
          } else return dr(r, e.vars) ? e : new W(e.prev, new K(r, e.vars), !1);
        else return null;
      }
      function nr(r) {
        return (
          r == 'public' || r == 'private' || r == 'protected' || r == 'abstract' || r == 'readonly'
        );
      }
      function W(r, e, t) {
        (this.prev = r), (this.vars = e), (this.block = t);
      }
      function K(r, e) {
        (this.name = r), (this.next = e);
      }
      var Wr = new K('this', new K('arguments', null));
      function $() {
        (i.state.context = new W(i.state.context, i.state.localVars, !1)), (i.state.localVars = Wr);
      }
      function tr() {
        (i.state.context = new W(i.state.context, i.state.localVars, !0)),
          (i.state.localVars = null);
      }
      $.lex = tr.lex = !0;
      function j() {
        (i.state.localVars = i.state.context.vars), (i.state.context = i.state.context.prev);
      }
      j.lex = !0;
      function s(r, e) {
        var t = function () {
          var f = i.state,
            u = f.indented;
          if (f.lexical.type == 'stat') u = f.lexical.indented;
          else for (var l = f.lexical; l && l.type == ')' && l.align; l = l.prev) u = l.indented;
          f.lexical = new jr(u, i.stream.column(), r, null, f.lexical, e);
        };
        return (t.lex = !0), t;
      }
      function a() {
        var r = i.state;
        r.lexical.prev &&
          (r.lexical.type == ')' && (r.indented = r.lexical.indented),
          (r.lexical = r.lexical.prev));
      }
      a.lex = !0;
      function c(r) {
        function e(t) {
          return t == r ? n() : r == ';' || t == '}' || t == ')' || t == ']' ? o() : n(e);
        }
        return e;
      }
      function h(r, e) {
        return r == 'var'
          ? n(s('vardef', e), wr, c(';'), a)
          : r == 'keyword a'
            ? n(s('form'), mr, h, a)
            : r == 'keyword b'
              ? n(s('form'), h, a)
              : r == 'keyword d'
                ? i.stream.match(/^\s*$/, !1)
                  ? n()
                  : n(s('stat'), F, c(';'), a)
                : r == 'debugger'
                  ? n(c(';'))
                  : r == '{'
                    ? n(s('}'), tr, ar, a, j)
                    : r == ';'
                      ? n()
                      : r == 'if'
                        ? (i.state.lexical.info == 'else' &&
                            i.state.cc[i.state.cc.length - 1] == a &&
                            i.state.cc.pop()(),
                          n(s('form'), mr, h, a, zr))
                        : r == 'function'
                          ? n(_)
                          : r == 'for'
                            ? n(s('form'), tr, Mr, h, j, a)
                            : r == 'class' || (p && e == 'interface')
                              ? ((i.marked = 'keyword'), n(s('form', r == 'class' ? r : e), $r, a))
                              : r == 'variable'
                                ? p && e == 'declare'
                                  ? ((i.marked = 'keyword'), n(h))
                                  : p &&
                                      (e == 'module' || e == 'enum' || e == 'type') &&
                                      i.stream.match(/^\s*\w/, !1)
                                    ? ((i.marked = 'keyword'),
                                      e == 'enum'
                                        ? n(Br)
                                        : e == 'type'
                                          ? n(Or, c('operator'), d, c(';'))
                                          : n(s('form'), E, c('{'), s('}'), ar, a, a))
                                    : p && e == 'namespace'
                                      ? ((i.marked = 'keyword'), n(s('form'), k, h, a))
                                      : p && e == 'abstract'
                                        ? ((i.marked = 'keyword'), n(h))
                                        : n(s('stat'), Zr)
                                : r == 'switch'
                                  ? n(s('form'), mr, c('{'), s('}', 'switch'), tr, ar, a, a, j)
                                  : r == 'case'
                                    ? n(k, c(':'))
                                    : r == 'default'
                                      ? n(c(':'))
                                      : r == 'catch'
                                        ? n(s('form'), $, Kr, h, a, j)
                                        : r == 'export'
                                          ? n(s('stat'), le, a)
                                          : r == 'import'
                                            ? n(s('stat'), de, a)
                                            : r == 'async'
                                              ? n(h)
                                              : e == '@'
                                                ? n(k, h)
                                                : o(s('stat'), k, c(';'), a);
      }
      function Kr(r) {
        if (r == '(') return n(B, c(')'));
      }
      function k(r, e) {
        return Ar(r, e, !1);
      }
      function y(r, e) {
        return Ar(r, e, !0);
      }
      function mr(r) {
        return r != '(' ? o() : n(s(')'), F, c(')'), a);
      }
      function Ar(r, e, t) {
        if (i.state.fatArrowAt == i.stream.start) {
          var f = t ? Ir : Vr;
          if (r == '(') return n($, s(')'), v(B, ')'), a, c('=>'), f, j);
          if (r == 'variable') return o($, E, c('=>'), f, j);
        }
        var u = t ? D : q;
        return Rr.hasOwnProperty(r)
          ? n(u)
          : r == 'function'
            ? n(_, u)
            : r == 'class' || (p && e == 'interface')
              ? ((i.marked = 'keyword'), n(s('form'), ce, a))
              : r == 'keyword c' || r == 'async'
                ? n(t ? y : k)
                : r == '('
                  ? n(s(')'), F, c(')'), a, u)
                  : r == 'operator' || r == 'spread'
                    ? n(t ? y : k)
                    : r == '['
                      ? n(s(']'), pe, a, u)
                      : r == '{'
                        ? H(fr, '}', null, u)
                        : r == 'quasi'
                          ? o(ir, u)
                          : r == 'new'
                            ? n(Gr(t))
                            : n();
      }
      function F(r) {
        return r.match(/[;\}\)\],]/) ? o() : o(k);
      }
      function q(r, e) {
        return r == ',' ? n(F) : D(r, e, !1);
      }
      function D(r, e, t) {
        var f = t == !1 ? q : D,
          u = t == !1 ? k : y;
        if (r == '=>') return n($, t ? Ir : Vr, j);
        if (r == 'operator')
          return /\+\+|--/.test(e) || (p && e == '!')
            ? n(f)
            : p && e == '<' && i.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
              ? n(s('>'), v(d, '>'), a, f)
              : e == '?'
                ? n(k, c(':'), u)
                : n(u);
        if (r == 'quasi') return o(ir, f);
        if (r != ';') {
          if (r == '(') return H(y, ')', 'call', f);
          if (r == '.') return n(Cr, f);
          if (r == '[') return n(s(']'), F, c(']'), a, f);
          if (p && e == 'as') return (i.marked = 'keyword'), n(d, f);
          if (r == 'regexp')
            return (
              (i.state.lastType = i.marked = 'operator'),
              i.stream.backUp(i.stream.pos - i.stream.start - 1),
              n(u)
            );
        }
      }
      function ir(r, e) {
        return r != 'quasi' ? o() : e.slice(e.length - 2) != '${' ? n(ir) : n(F, Hr);
      }
      function Hr(r) {
        if (r == '}') return (i.marked = 'string-2'), (i.state.tokenize = U), n(ir);
      }
      function Vr(r) {
        return lr(i.stream, i.state), o(r == '{' ? h : k);
      }
      function Ir(r) {
        return lr(i.stream, i.state), o(r == '{' ? h : y);
      }
      function Gr(r) {
        return function (e) {
          return e == '.' ? n(r ? Yr : Xr) : e == 'variable' && p ? n(fe, r ? D : q) : o(r ? y : k);
        };
      }
      function Xr(r, e) {
        if (e == 'target') return (i.marked = 'keyword'), n(q);
      }
      function Yr(r, e) {
        if (e == 'target') return (i.marked = 'keyword'), n(D);
      }
      function Zr(r) {
        return r == ':' ? n(a, h) : o(q, c(';'), a);
      }
      function Cr(r) {
        if (r == 'variable') return (i.marked = 'property'), n();
      }
      function fr(r, e) {
        if (r == 'async') return (i.marked = 'property'), n(fr);
        if (r == 'variable' || i.style == 'keyword') {
          if (((i.marked = 'property'), e == 'get' || e == 'set')) return n(re);
          var t;
          return (
            p &&
              i.state.fatArrowAt == i.stream.start &&
              (t = i.stream.match(/^\s*:\s*/, !1)) &&
              (i.state.fatArrowAt = i.stream.pos + t[0].length),
            n(N)
          );
        } else {
          if (r == 'number' || r == 'string')
            return (i.marked = Z ? 'property' : i.style + ' property'), n(N);
          if (r == 'jsonld-keyword') return n(N);
          if (p && nr(e)) return (i.marked = 'keyword'), n(fr);
          if (r == '[') return n(k, J, c(']'), N);
          if (r == 'spread') return n(y, N);
          if (e == '*') return (i.marked = 'keyword'), n(fr);
          if (r == ':') return o(N);
        }
      }
      function re(r) {
        return r != 'variable' ? o(N) : ((i.marked = 'property'), n(_));
      }
      function N(r) {
        if (r == ':') return n(y);
        if (r == '(') return o(_);
      }
      function v(r, e, t) {
        function f(u, l) {
          if (t ? t.indexOf(u) > -1 : u == ',') {
            var m = i.state.lexical;
            return (
              m.info == 'call' && (m.pos = (m.pos || 0) + 1),
              n(function (g, A) {
                return g == e || A == e ? o() : o(r);
              }, f)
            );
          }
          return u == e || l == e ? n() : t && t.indexOf(';') > -1 ? o(r) : n(c(e));
        }
        return function (u, l) {
          return u == e || l == e ? n() : o(r, f);
        };
      }
      function H(r, e, t) {
        for (var f = 3; f < arguments.length; f++) i.cc.push(arguments[f]);
        return n(s(e, t), v(r, e), a);
      }
      function ar(r) {
        return r == '}' ? n() : o(h, ar);
      }
      function J(r, e) {
        if (p) {
          if (r == ':') return n(d);
          if (e == '?') return n(J);
        }
      }
      function ee(r, e) {
        if (p && (r == ':' || e == 'in')) return n(d);
      }
      function Sr(r) {
        if (p && r == ':') return i.stream.match(/^\s*\w+\s+is\b/, !1) ? n(k, ne, d) : n(d);
      }
      function ne(r, e) {
        if (e == 'is') return (i.marked = 'keyword'), n();
      }
      function d(r, e) {
        if (e == 'keyof' || e == 'typeof' || e == 'infer' || e == 'readonly')
          return (i.marked = 'keyword'), n(e == 'typeof' ? y : d);
        if (r == 'variable' || e == 'void') return (i.marked = 'type'), n(V);
        if (e == '|' || e == '&') return n(d);
        if (r == 'string' || r == 'number' || r == 'atom') return n(V);
        if (r == '[') return n(s(']'), v(d, ']', ','), a, V);
        if (r == '{') return n(s('}'), pr, a, V);
        if (r == '(') return n(v(br, ')'), te, V);
        if (r == '<') return n(v(d, '>'), d);
        if (r == 'quasi') return o(kr, V);
      }
      function te(r) {
        if (r == '=>') return n(d);
      }
      function pr(r) {
        return r.match(/[\}\)\]]/) ? n() : r == ',' || r == ';' ? n(pr) : o(G, pr);
      }
      function G(r, e) {
        if (r == 'variable' || i.style == 'keyword') return (i.marked = 'property'), n(G);
        if (e == '?' || r == 'number' || r == 'string') return n(G);
        if (r == ':') return n(d);
        if (r == '[') return n(c('variable'), ee, c(']'), G);
        if (r == '(') return o(Q, G);
        if (!r.match(/[;\}\)\],]/)) return n();
      }
      function kr(r, e) {
        return r != 'quasi' ? o() : e.slice(e.length - 2) != '${' ? n(kr) : n(d, ie);
      }
      function ie(r) {
        if (r == '}') return (i.marked = 'string-2'), (i.state.tokenize = U), n(kr);
      }
      function br(r, e) {
        return (r == 'variable' && i.stream.match(/^\s*[?:]/, !1)) || e == '?'
          ? n(br)
          : r == ':'
            ? n(d)
            : r == 'spread'
              ? n(br)
              : o(d);
      }
      function V(r, e) {
        if (e == '<') return n(s('>'), v(d, '>'), a, V);
        if (e == '|' || r == '.' || e == '&') return n(d);
        if (r == '[') return n(d, c(']'), V);
        if (e == 'extends' || e == 'implements') return (i.marked = 'keyword'), n(d);
        if (e == '?') return n(d, c(':'), d);
      }
      function fe(r, e) {
        if (e == '<') return n(s('>'), v(d, '>'), a, V);
      }
      function ur() {
        return o(d, ae);
      }
      function ae(r, e) {
        if (e == '=') return n(d);
      }
      function wr(r, e) {
        return e == 'enum' ? ((i.marked = 'keyword'), n(Br)) : o(E, J, S, oe);
      }
      function E(r, e) {
        if (p && nr(e)) return (i.marked = 'keyword'), n(E);
        if (r == 'variable') return P(e), n();
        if (r == 'spread') return n(E);
        if (r == '[') return H(ue, ']');
        if (r == '{') return H(_r, '}');
      }
      function _r(r, e) {
        return r == 'variable' && !i.stream.match(/^\s*:/, !1)
          ? (P(e), n(S))
          : (r == 'variable' && (i.marked = 'property'),
            r == 'spread'
              ? n(E)
              : r == '}'
                ? o()
                : r == '['
                  ? n(k, c(']'), c(':'), _r)
                  : n(c(':'), E, S));
      }
      function ue() {
        return o(E, S);
      }
      function S(r, e) {
        if (e == '=') return n(y);
      }
      function oe(r) {
        if (r == ',') return n(wr);
      }
      function zr(r, e) {
        if (r == 'keyword b' && e == 'else') return n(s('form', 'else'), h, a);
      }
      function Mr(r, e) {
        if (e == 'await') return n(Mr);
        if (r == '(') return n(s(')'), se, a);
      }
      function se(r) {
        return r == 'var' ? n(wr, L) : r == 'variable' ? n(L) : o(L);
      }
      function L(r, e) {
        return r == ')'
          ? n()
          : r == ';'
            ? n(L)
            : e == 'in' || e == 'of'
              ? ((i.marked = 'keyword'), n(k, L))
              : o(k, L);
      }
      function _(r, e) {
        if (e == '*') return (i.marked = 'keyword'), n(_);
        if (r == 'variable') return P(e), n(_);
        if (r == '(') return n($, s(')'), v(B, ')'), a, Sr, h, j);
        if (p && e == '<') return n(s('>'), v(ur, '>'), a, _);
      }
      function Q(r, e) {
        if (e == '*') return (i.marked = 'keyword'), n(Q);
        if (r == 'variable') return P(e), n(Q);
        if (r == '(') return n($, s(')'), v(B, ')'), a, Sr, j);
        if (p && e == '<') return n(s('>'), v(ur, '>'), a, Q);
      }
      function Or(r, e) {
        if (r == 'keyword' || r == 'variable') return (i.marked = 'type'), n(Or);
        if (e == '<') return n(s('>'), v(ur, '>'), a);
      }
      function B(r, e) {
        return (
          e == '@' && n(k, B),
          r == 'spread'
            ? n(B)
            : p && nr(e)
              ? ((i.marked = 'keyword'), n(B))
              : p && r == 'this'
                ? n(J, S)
                : o(E, J, S)
        );
      }
      function ce(r, e) {
        return r == 'variable' ? $r(r, e) : or(r, e);
      }
      function $r(r, e) {
        if (r == 'variable') return P(e), n(or);
      }
      function or(r, e) {
        if (e == '<') return n(s('>'), v(ur, '>'), a, or);
        if (e == 'extends' || e == 'implements' || (p && r == ','))
          return e == 'implements' && (i.marked = 'keyword'), n(p ? d : k, or);
        if (r == '{') return n(s('}'), I, a);
      }
      function I(r, e) {
        if (
          r == 'async' ||
          (r == 'variable' &&
            (e == 'static' || e == 'get' || e == 'set' || (p && nr(e))) &&
            i.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
        )
          return (i.marked = 'keyword'), n(I);
        if (r == 'variable' || i.style == 'keyword') return (i.marked = 'property'), n(X, I);
        if (r == 'number' || r == 'string') return n(X, I);
        if (r == '[') return n(k, J, c(']'), X, I);
        if (e == '*') return (i.marked = 'keyword'), n(I);
        if (p && r == '(') return o(Q, I);
        if (r == ';' || r == ',') return n(I);
        if (r == '}') return n();
        if (e == '@') return n(k, I);
      }
      function X(r, e) {
        if (e == '!' || e == '?') return n(X);
        if (r == ':') return n(d, S);
        if (e == '=') return n(y);
        var t = i.state.lexical.prev,
          f = t && t.info == 'interface';
        return o(f ? Q : _);
      }
      function le(r, e) {
        return e == '*'
          ? ((i.marked = 'keyword'), n(xr, c(';')))
          : e == 'default'
            ? ((i.marked = 'keyword'), n(k, c(';')))
            : r == '{'
              ? n(v(qr, '}'), xr, c(';'))
              : o(h);
      }
      function qr(r, e) {
        if (e == 'as') return (i.marked = 'keyword'), n(c('variable'));
        if (r == 'variable') return o(y, qr);
      }
      function de(r) {
        return r == 'string' ? n() : r == '(' ? o(k) : r == '.' ? o(q) : o(sr, Nr, xr);
      }
      function sr(r, e) {
        return r == '{'
          ? H(sr, '}')
          : (r == 'variable' && P(e), e == '*' && (i.marked = 'keyword'), n(me));
      }
      function Nr(r) {
        if (r == ',') return n(sr, Nr);
      }
      function me(r, e) {
        if (e == 'as') return (i.marked = 'keyword'), n(sr);
      }
      function xr(r, e) {
        if (e == 'from') return (i.marked = 'keyword'), n(k);
      }
      function pe(r) {
        return r == ']' ? n() : o(v(y, ']'));
      }
      function Br() {
        return o(s('form'), E, c('{'), s('}'), v(ke, '}'), a, a);
      }
      function ke() {
        return o(E, S);
      }
      function be(r, e) {
        return (
          r.lastType == 'operator' ||
          r.lastType == ',' ||
          yr.test(e.charAt(0)) ||
          /[,.]/.test(e.charAt(0))
        );
      }
      function Pr(r, e, t) {
        return (
          (e.tokenize == O &&
            /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
              e.lastType,
            )) ||
          (e.lastType == 'quasi' && /\{\s*$/.test(r.string.slice(0, r.pos - (t || 0))))
        );
      }
      return {
        startState: function (r) {
          var e = {
            tokenize: O,
            lastType: 'sof',
            cc: [],
            lexical: new jr((r || 0) - T, 0, 'block', !1),
            localVars: x.localVars,
            context: x.localVars && new W(null, null, !1),
            indented: r || 0,
          };
          return (
            x.globalVars && typeof x.globalVars == 'object' && (e.globalVars = x.globalVars), e
          );
        },
        token: function (r, e) {
          if (
            (r.sol() &&
              (e.lexical.hasOwnProperty('align') || (e.lexical.align = !1),
              (e.indented = r.indentation()),
              lr(r, e)),
            e.tokenize != er && r.eatSpace())
          )
            return null;
          var t = e.tokenize(r, e);
          return R == 'comment'
            ? t
            : ((e.lastType = R == 'operator' && (rr == '++' || rr == '--') ? 'incdec' : R),
              Er(e, t, R, rr, r));
        },
        indent: function (r, e) {
          if (r.tokenize == er || r.tokenize == U) return b.Pass;
          if (r.tokenize != O) return 0;
          var t = e && e.charAt(0),
            f = r.lexical,
            u;
          if (!/^\s*else\b/.test(e))
            for (var l = r.cc.length - 1; l >= 0; --l) {
              var m = r.cc[l];
              if (m == a) f = f.prev;
              else if (m != zr && m != j) break;
            }
          for (
            ;
            (f.type == 'stat' || f.type == 'form') &&
            (t == '}' ||
              ((u = r.cc[r.cc.length - 1]) && (u == q || u == D) && !/^[,\.=+\-*:?[\(]/.test(e)));

          )
            f = f.prev;
          hr && f.type == ')' && f.prev.type == 'stat' && (f = f.prev);
          var g = f.type,
            A = t == g;
          return g == 'vardef'
            ? f.indented + (r.lastType == 'operator' || r.lastType == ',' ? f.info.length + 1 : 0)
            : g == 'form' && t == '{'
              ? f.indented
              : g == 'form'
                ? f.indented + T
                : g == 'stat'
                  ? f.indented + (be(r, e) ? hr || T : 0)
                  : f.info == 'switch' && !A && x.doubleIndentSwitch != !1
                    ? f.indented + (/^(?:case|default)\b/.test(e) ? T : 2 * T)
                    : f.align
                      ? f.column + (A ? 0 : 1)
                      : f.indented + (A ? 0 : T);
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: M ? null : '/*',
        blockCommentEnd: M ? null : '*/',
        blockCommentContinue: M ? null : ' * ',
        lineComment: M ? null : '//',
        fold: 'brace',
        closeBrackets: '()[]{}\'\'""``',
        helperType: M ? 'json' : 'javascript',
        jsonldMode: Z,
        jsonMode: M,
        expressionAllowed: Pr,
        skipExpression: function (r) {
          Er(r, 'atom', 'atom', 'true', new b.StringStream('', 2, null));
        },
      };
    }),
      b.registerHelper('wordChars', 'javascript', /[\w$]/),
      b.defineMIME('text/javascript', 'javascript'),
      b.defineMIME('text/ecmascript', 'javascript'),
      b.defineMIME('application/javascript', 'javascript'),
      b.defineMIME('application/x-javascript', 'javascript'),
      b.defineMIME('application/ecmascript', 'javascript'),
      b.defineMIME('application/json', { name: 'javascript', json: !0 }),
      b.defineMIME('application/x-json', { name: 'javascript', json: !0 }),
      b.defineMIME('application/manifest+json', { name: 'javascript', json: !0 }),
      b.defineMIME('application/ld+json', { name: 'javascript', jsonld: !0 }),
      b.defineMIME('text/typescript', { name: 'javascript', typescript: !0 }),
      b.defineMIME('application/typescript', { name: 'javascript', typescript: !0 });
  });
})();
var Fr = ge.exports;
const ye = xe(Fr),
  Te = ve({ __proto__: null, default: ye }, [Fr]);
export { Fr as a, Te as j };
