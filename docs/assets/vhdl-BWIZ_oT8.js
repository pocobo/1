import { b as E } from './antd-BmrhB3rb.js';
import { r as _ } from './index-Ck6h_6RS.js';
function L(g, x) {
  for (var c = 0; c < x.length; c++) {
    const l = x[c];
    if (typeof l != 'string' && !Array.isArray(l)) {
      for (const a in l)
        if (a !== 'default' && !(a in g)) {
          const u = Object.getOwnPropertyDescriptor(l, a);
          u && Object.defineProperty(g, a, u.get ? u : { enumerable: !0, get: () => l[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(g, Symbol.toStringTag, { value: 'Module' }));
}
var $ = { exports: {} };
(function (g, x) {
  (function (c) {
    c(_());
  })(function (c) {
    function l(u) {
      for (var d = {}, f = u.split(','), p = 0; p < f.length; ++p) {
        var v = f[p].toUpperCase(),
          y = f[p].charAt(0).toUpperCase() + f[p].slice(1);
        (d[f[p]] = !0), (d[v] = !0), (d[y] = !0);
      }
      return d;
    }
    function a(u) {
      return u.eatWhile(/[\w\$_]/), 'meta';
    }
    c.defineMode('vhdl', function (u, d) {
      var f = u.indentUnit,
        p = d.atoms || l('null'),
        v = d.hooks || { '`': a, $: a },
        y = d.multiLineStrings,
        O = l(
          'abs,access,after,alias,all,and,architecture,array,assert,attribute,begin,block,body,buffer,bus,case,component,configuration,constant,disconnect,downto,else,elsif,end,end block,end case,end component,end for,end generate,end if,end loop,end process,end record,end units,entity,exit,file,for,function,generate,generic,generic map,group,guarded,if,impure,in,inertial,inout,is,label,library,linkage,literal,loop,map,mod,nand,new,next,nor,null,of,on,open,or,others,out,package,package body,port,port map,postponed,procedure,process,pure,range,record,register,reject,rem,report,return,rol,ror,select,severity,signal,sla,sll,sra,srl,subtype,then,to,transport,type,unaffected,units,until,use,variable,wait,when,while,with,xnor,xor',
        ),
        C = l('architecture,entity,begin,case,port,else,elsif,end,for,function,if'),
        k = /[&|~><!\)\(*#%@+\/=?\:;}{,\.\^\-\[\]]/,
        o;
      function m(e, n) {
        var t = e.next();
        if (v[t]) {
          var r = v[t](e, n);
          if (r !== !1) return r;
        }
        if (t == '"') return (n.tokenize = j(t)), n.tokenize(e, n);
        if (t == "'") return (n.tokenize = S(t)), n.tokenize(e, n);
        if (/[\[\]{}\(\),;\:\.]/.test(t)) return (o = t), null;
        if (/[\d']/.test(t)) return e.eatWhile(/[\w\.']/), 'number';
        if (t == '-' && e.eat('-')) return e.skipToEnd(), 'comment';
        if (k.test(t)) return e.eatWhile(k), 'operator';
        e.eatWhile(/[\w\$_]/);
        var i = e.current();
        return O.propertyIsEnumerable(i.toLowerCase())
          ? (C.propertyIsEnumerable(i) && (o = 'newstatement'), 'keyword')
          : p.propertyIsEnumerable(i)
            ? 'atom'
            : 'variable';
      }
      function S(e) {
        return function (n, t) {
          for (var r = !1, i, h = !1; (i = n.next()) != null; ) {
            if (i == e && !r) {
              h = !0;
              break;
            }
            r = !r && i == '--';
          }
          return (h || !(r || y)) && (t.tokenize = m), 'string';
        };
      }
      function j(e) {
        return function (n, t) {
          for (var r = !1, i, h = !1; (i = n.next()) != null; ) {
            if (i == e && !r) {
              h = !0;
              break;
            }
            r = !r && i == '--';
          }
          return (h || !(r || y)) && (t.tokenize = m), 'string-2';
        };
      }
      function w(e, n, t, r, i) {
        (this.indented = e), (this.column = n), (this.type = t), (this.align = r), (this.prev = i);
      }
      function b(e, n, t) {
        return (e.context = new w(e.indented, n, t, null, e.context));
      }
      function s(e) {
        var n = e.context.type;
        return (
          (n == ')' || n == ']' || n == '}') && (e.indented = e.context.indented),
          (e.context = e.context.prev)
        );
      }
      return {
        startState: function (e) {
          return {
            tokenize: null,
            context: new w((e || 0) - f, 0, 'top', !1),
            indented: 0,
            startOfLine: !0,
          };
        },
        token: function (e, n) {
          var t = n.context;
          if (
            (e.sol() &&
              (t.align == null && (t.align = !1),
              (n.indented = e.indentation()),
              (n.startOfLine = !0)),
            e.eatSpace())
          )
            return null;
          o = null;
          var r = (n.tokenize || m)(e, n);
          if (r == 'comment' || r == 'meta') return r;
          if ((t.align == null && (t.align = !0), (o == ';' || o == ':') && t.type == 'statement'))
            s(n);
          else if (o == '{') b(n, e.column(), '}');
          else if (o == '[') b(n, e.column(), ']');
          else if (o == '(') b(n, e.column(), ')');
          else if (o == '}') {
            for (; t.type == 'statement'; ) t = s(n);
            for (t.type == '}' && (t = s(n)); t.type == 'statement'; ) t = s(n);
          } else
            o == t.type
              ? s(n)
              : (t.type == '}' ||
                  t.type == 'top' ||
                  (t.type == 'statement' && o == 'newstatement')) &&
                b(n, e.column(), 'statement');
          return (n.startOfLine = !1), r;
        },
        indent: function (e, n) {
          if (e.tokenize != m && e.tokenize != null) return 0;
          var t = n && n.charAt(0),
            r = e.context,
            i = t == r.type;
          return r.type == 'statement'
            ? r.indented + (t == '{' ? 0 : f)
            : r.align
              ? r.column + (i ? 0 : 1)
              : r.indented + (i ? 0 : f);
        },
        electricChars: '{}',
      };
    }),
      c.defineMIME('text/x-vhdl', 'vhdl');
  });
})();
var z = $.exports;
const I = E(z),
  W = L({ __proto__: null, default: I }, [z]);
export { W as v };
