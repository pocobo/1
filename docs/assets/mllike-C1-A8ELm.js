import{b as x}from"./antd-BmrhB3rb.js";import{r as g}from"./index-Ck6h_6RS.js";function v(k,u){for(var n=0;n<u.length;n++){const l=u[n];if(typeof l!="string"&&!Array.isArray(l)){for(const i in l)if(i!=="default"&&!(i in k)){const d=Object.getOwnPropertyDescriptor(l,i);d&&Object.defineProperty(k,i,d.get?d:{enumerable:!0,get:()=>l[i]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var W={exports:{}};(function(k,u){(function(n){n(g())})(function(n){n.defineMode("mllike",function(l,i){var d={as:"keyword",do:"keyword",else:"keyword",end:"keyword",exception:"keyword",fun:"keyword",functor:"keyword",if:"keyword",in:"keyword",include:"keyword",let:"keyword",of:"keyword",open:"keyword",rec:"keyword",struct:"keyword",then:"keyword",type:"keyword",val:"keyword",while:"keyword",with:"keyword"},f=i.extraWords||{};for(var a in f)f.hasOwnProperty(a)&&(d[a]=i.extraWords[a]);var c=[];for(var b in d)c.push(b);n.registerHelper("hintWords","mllike",c);function y(e,r){var o=e.next();if(o==='"')return r.tokenize=m,r.tokenize(e,r);if(o==="{"&&e.eat("|"))return r.longString=!0,r.tokenize=h,r.tokenize(e,r);if(o==="("&&e.match(/^\*(?!\))/))return r.commentLevel++,r.tokenize=p,r.tokenize(e,r);if(o==="~"||o==="?")return e.eatWhile(/\w/),"variable-2";if(o==="`")return e.eatWhile(/\w/),"quote";if(o==="/"&&i.slashComments&&e.eat("/"))return e.skipToEnd(),"comment";if(/\d/.test(o))return o==="0"&&e.eat(/[bB]/)&&e.eatWhile(/[01]/),o==="0"&&e.eat(/[xX]/)&&e.eatWhile(/[0-9a-fA-F]/),o==="0"&&e.eat(/[oO]/)?e.eatWhile(/[0-7]/):(e.eatWhile(/[\d_]/),e.eat(".")&&e.eatWhile(/[\d]/),e.eat(/[eE]/)&&e.eatWhile(/[\d\-+]/)),"number";if(/[+\-*&%=<>!?|@\.~:]/.test(o))return"operator";if(/[\w\xa1-\uffff]/.test(o)){e.eatWhile(/[\w\xa1-\uffff]/);var t=e.current();return d.hasOwnProperty(t)?d[t]:"variable"}return null}function m(e,r){for(var o,t=!1,w=!1;(o=e.next())!=null;){if(o==='"'&&!w){t=!0;break}w=!w&&o==="\\"}return t&&!w&&(r.tokenize=y),"string"}function p(e,r){for(var o,t;r.commentLevel>0&&(t=e.next())!=null;)o==="("&&t==="*"&&r.commentLevel++,o==="*"&&t===")"&&r.commentLevel--,o=t;return r.commentLevel<=0&&(r.tokenize=y),"comment"}function h(e,r){for(var o,t;r.longString&&(t=e.next())!=null;)o==="|"&&t==="}"&&(r.longString=!1),o=t;return r.longString||(r.tokenize=y),"string"}return{startState:function(){return{tokenize:y,commentLevel:0,longString:!1}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)},blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:i.slashComments?"//":null}}),n.defineMIME("text/x-ocaml",{name:"mllike",extraWords:{and:"keyword",assert:"keyword",begin:"keyword",class:"keyword",constraint:"keyword",done:"keyword",downto:"keyword",external:"keyword",function:"keyword",initializer:"keyword",lazy:"keyword",match:"keyword",method:"keyword",module:"keyword",mutable:"keyword",new:"keyword",nonrec:"keyword",object:"keyword",private:"keyword",sig:"keyword",to:"keyword",try:"keyword",value:"keyword",virtual:"keyword",when:"keyword",raise:"builtin",failwith:"builtin",true:"builtin",false:"builtin",asr:"builtin",land:"builtin",lor:"builtin",lsl:"builtin",lsr:"builtin",lxor:"builtin",mod:"builtin",or:"builtin",raise_notrace:"builtin",trace:"builtin",exit:"builtin",print_string:"builtin",print_endline:"builtin",int:"type",float:"type",bool:"type",char:"type",string:"type",unit:"type",List:"builtin"}}),n.defineMIME("text/x-fsharp",{name:"mllike",extraWords:{abstract:"keyword",assert:"keyword",base:"keyword",begin:"keyword",class:"keyword",default:"keyword",delegate:"keyword","do!":"keyword",done:"keyword",downcast:"keyword",downto:"keyword",elif:"keyword",extern:"keyword",finally:"keyword",for:"keyword",function:"keyword",global:"keyword",inherit:"keyword",inline:"keyword",interface:"keyword",internal:"keyword",lazy:"keyword","let!":"keyword",match:"keyword",member:"keyword",module:"keyword",mutable:"keyword",namespace:"keyword",new:"keyword",null:"keyword",override:"keyword",private:"keyword",public:"keyword","return!":"keyword",return:"keyword",select:"keyword",static:"keyword",to:"keyword",try:"keyword",upcast:"keyword","use!":"keyword",use:"keyword",void:"keyword",when:"keyword","yield!":"keyword",yield:"keyword",atomic:"keyword",break:"keyword",checked:"keyword",component:"keyword",const:"keyword",constraint:"keyword",constructor:"keyword",continue:"keyword",eager:"keyword",event:"keyword",external:"keyword",fixed:"keyword",method:"keyword",mixin:"keyword",object:"keyword",parallel:"keyword",process:"keyword",protected:"keyword",pure:"keyword",sealed:"keyword",tailcall:"keyword",trait:"keyword",virtual:"keyword",volatile:"keyword",List:"builtin",Seq:"builtin",Map:"builtin",Set:"builtin",Option:"builtin",int:"builtin",string:"builtin",not:"builtin",true:"builtin",false:"builtin",raise:"builtin",failwith:"builtin"},slashComments:!0}),n.defineMIME("text/x-sml",{name:"mllike",extraWords:{abstype:"keyword",and:"keyword",andalso:"keyword",case:"keyword",datatype:"keyword",fn:"keyword",handle:"keyword",infix:"keyword",infixr:"keyword",local:"keyword",nonfix:"keyword",op:"keyword",orelse:"keyword",raise:"keyword",withtype:"keyword",eqtype:"keyword",sharing:"keyword",sig:"keyword",signature:"keyword",structure:"keyword",where:"keyword",true:"keyword",false:"keyword",int:"builtin",real:"builtin",string:"builtin",char:"builtin",bool:"builtin"},slashComments:!0})})})();var s=W.exports;const z=x(s),L=v({__proto__:null,default:z},[s]);export{L as m};
