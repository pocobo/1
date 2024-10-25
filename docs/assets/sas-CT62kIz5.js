import { b } from './antd-BmrhB3rb.js';
import { r as v } from './index-Ck6h_6RS.js';
function g(p, d) {
  for (var i = 0; i < d.length; i++) {
    const t = d[i];
    if (typeof t != 'string' && !Array.isArray(t)) {
      for (const a in t)
        if (a !== 'default' && !(a in p)) {
          const l = Object.getOwnPropertyDescriptor(t, a);
          l && Object.defineProperty(p, a, l.get ? l : { enumerable: !0, get: () => t[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(p, Symbol.toStringTag, { value: 'Module' }));
}
var h = { exports: {} };
(function (p, d) {
  (function (i) {
    i(v());
  })(function (i) {
    i.defineMode('sas', function () {
      var t = {},
        a = {
          eq: 'operator',
          lt: 'operator',
          le: 'operator',
          gt: 'operator',
          ge: 'operator',
          in: 'operator',
          ne: 'operator',
          or: 'operator',
        },
        l = /(<=|>=|!=|<>)/,
        m = /[=\(:\),{}.*<>+\-\/^\[\]]/;
      function o(e, r, s) {
        if (s)
          for (var c = r.split(' '), n = 0; n < c.length; n++) t[c[n]] = { style: e, state: s };
      }
      o('def', 'stack pgm view source debug nesting nolist', ['inDataStep']),
        o('def', 'if while until for do do; end end; then else cancel', ['inDataStep']),
        o('def', 'label format _n_ _error_', ['inDataStep']),
        o(
          'def',
          'ALTER BUFNO BUFSIZE CNTLLEV COMPRESS DLDMGACTION ENCRYPT ENCRYPTKEY EXTENDOBSCOUNTER GENMAX GENNUM INDEX LABEL OBSBUF OUTREP PW PWREQ READ REPEMPTY REPLACE REUSE ROLE SORTEDBY SPILL TOBSNO TYPE WRITE FILECLOSE FIRSTOBS IN OBS POINTOBS WHERE WHEREUP IDXNAME IDXWHERE DROP KEEP RENAME',
          ['inDataStep'],
        ),
        o('def', 'filevar finfo finv fipname fipnamel fipstate first firstobs floor', [
          'inDataStep',
        ]),
        o(
          'def',
          'varfmt varinfmt varlabel varlen varname varnum varray varrayx vartype verify vformat vformatd vformatdx vformatn vformatnx vformatw vformatwx vformatx vinarray vinarrayx vinformat vinformatd vinformatdx vinformatn vinformatnx vinformatw vinformatwx vinformatx vlabel vlabelx vlength vlengthx vname vnamex vnferr vtype vtypex weekday',
          ['inDataStep'],
        ),
        o('def', 'zipfips zipname zipnamel zipstate', ['inDataStep']),
        o('def', 'put putc putn', ['inDataStep']),
        o('builtin', 'data run', ['inDataStep']),
        o('def', 'data', ['inProc']),
        o('def', '%if %end %end; %else %else; %do %do; %then', ['inMacro']),
        o('builtin', 'proc run; quit; libname filename %macro %mend option options', ['ALL']),
        o('def', 'footnote title libname ods', ['ALL']),
        o('def', '%let %put %global %sysfunc %eval ', ['ALL']),
        o(
          'variable',
          '&sysbuffr &syscc &syscharwidth &syscmd &sysdate &sysdate9 &sysday &sysdevic &sysdmg &sysdsn &sysencoding &sysenv &syserr &syserrortext &sysfilrc &syshostname &sysindex &sysinfo &sysjobid &syslast &syslckrc &syslibrc &syslogapplname &sysmacroname &sysmenv &sysmsg &sysncpu &sysodspath &sysparm &syspbuff &sysprocessid &sysprocessname &sysprocname &sysrc &sysscp &sysscpl &sysscpl &syssite &sysstartid &sysstartname &systcpiphostname &systime &sysuserid &sysver &sysvlong &sysvlong4 &syswarningtext',
          ['ALL'],
        ),
        o('def', 'source2 nosource2 page pageno pagesize', ['ALL']),
        o(
          'def',
          '_all_ _character_ _cmd_ _freq_ _i_ _infile_ _last_ _msg_ _null_ _numeric_ _temporary_ _type_ abort abs addr adjrsq airy alpha alter altlog altprint and arcos array arsin as atan attrc attrib attrn authserver autoexec awscontrol awsdef awsmenu awsmenumerge awstitle backward band base betainv between blocksize blshift bnot bor brshift bufno bufsize bxor by byerr byline byte calculated call cards cards4 catcache cbufno cdf ceil center cexist change chisq cinv class cleanup close cnonct cntllev coalesce codegen col collate collin column comamid comaux1 comaux2 comdef compbl compound compress config continue convert cos cosh cpuid create cross crosstab css curobs cv daccdb daccdbsl daccsl daccsyd dacctab dairy datalines datalines4 datejul datepart datetime day dbcslang dbcstype dclose ddfm ddm delete delimiter depdb depdbsl depsl depsyd deptab dequote descending descript design= device dflang dhms dif digamma dim dinfo display distinct dkricond dkrocond dlm dnum do dopen doptname doptnum dread drop dropnote dsname dsnferr echo else emaildlg emailid emailpw emailserver emailsys encrypt end endsas engine eof eov erf erfc error errorcheck errors exist exp fappend fclose fcol fdelete feedback fetch fetchobs fexist fget file fileclose fileexist filefmt filename fileref  fmterr fmtsearch fnonct fnote font fontalias  fopen foptname foptnum force formatted formchar formdelim formdlim forward fpoint fpos fput fread frewind frlen from fsep fuzz fwrite gaminv gamma getoption getvarc getvarn go goto group gwindow hbar hbound helpenv helploc hms honorappearance hosthelp hostprint hour hpct html hvar ibessel ibr id if index indexc indexw initcmd initstmt inner input inputc inputn inr insert int intck intnx into intrr invaliddata irr is jbessel join juldate keep kentb kurtosis label lag last lbound leave left length levels lgamma lib  library libref line linesize link list log log10 log2 logpdf logpmf logsdf lostcard lowcase lrecl ls macro macrogen maps mautosource max maxdec maxr mdy mean measures median memtype merge merror min minute missing missover mlogic mod mode model modify month mopen mort mprint mrecall msglevel msymtabmax mvarsize myy n nest netpv new news nmiss no nobatch nobs nocaps nocardimage nocenter nocharcode nocmdmac nocol nocum nodate nodbcs nodetails nodmr nodms nodmsbatch nodup nodupkey noduplicates noechoauto noequals noerrorabend noexitwindows nofullstimer noicon noimplmac noint nolist noloadlist nomiss nomlogic nomprint nomrecall nomsgcase nomstored nomultenvappl nonotes nonumber noobs noovp nopad nopercent noprint noprintinit normal norow norsasuser nosetinit  nosplash nosymbolgen note notes notitle notitles notsorted noverbose noxsync noxwait npv null number numkeys nummousekeys nway obs  on open     order ordinal otherwise out outer outp= output over ovp p(1 5 10 25 50 75 90 95 99) pad pad2  paired parm parmcards path pathdll pathname pdf peek peekc pfkey pmf point poisson poke position printer probbeta probbnml probchi probf probgam probhypr probit probnegb probnorm probsig probt procleave prt ps  pw pwreq qtr quote r ranbin rancau random ranexp rangam range ranks rannor ranpoi rantbl rantri ranuni rcorr read recfm register regr remote remove rename repeat repeated replace resolve retain return reuse reverse rewind right round rsquare rtf rtrace rtraceloc s s2 samploc sasautos sascontrol sasfrscr sasmsg sasmstore sasscript sasuser saving scan sdf second select selection separated seq serror set setcomm setot sign simple sin sinh siteinfo skewness skip sle sls sortedby sortpgm sortseq sortsize soundex  spedis splashlocation split spool sqrt start std stderr stdin stfips stimer stname stnamel stop stopover sub subgroup subpopn substr sum sumwgt symbol symbolgen symget symput sysget sysin sysleave sysmsg sysparm sysprint sysprintfont sysprod sysrc system t table tables tan tanh tapeclose tbufsize terminal test then timepart tinv  tnonct to today tol tooldef totper transformout translate trantab tranwrd trigamma trim trimn trunc truncover type unformatted uniform union until upcase update user usericon uss validate value var  weight when where while wincharset window work workinit workterm write wsum xsync xwait yearcutoff yes yyq  min max',
          ['inDataStep', 'inProc'],
        ),
        o('operator', 'and not ', ['inDataStep', 'inProc']);
      function y(e, r) {
        var s = e.next();
        if (s === '/' && e.eat('*')) return (r.continueComment = !0), 'comment';
        if (r.continueComment === !0)
          return (
            s === '*' && e.peek() === '/'
              ? (e.next(), (r.continueComment = !1))
              : e.skipTo('*')
                ? (e.skipTo('*'), e.next(), e.eat('/') && (r.continueComment = !1))
                : e.skipToEnd(),
            'comment'
          );
        if (s == '*' && e.column() == e.indentation()) return e.skipToEnd(), 'comment';
        var c = s + e.peek();
        if ((s === '"' || s === "'") && !r.continueString) return (r.continueString = s), 'string';
        if (r.continueString)
          return (
            r.continueString == s
              ? (r.continueString = null)
              : e.skipTo(r.continueString)
                ? (e.next(), (r.continueString = null))
                : e.skipToEnd(),
            'string'
          );
        if (r.continueString !== null && e.eol())
          return e.skipTo(r.continueString) || e.skipToEnd(), 'string';
        if (/[\d\.]/.test(s))
          return (
            s === '.'
              ? e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/)
              : s === '0'
                ? e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^0[0-7]+/)
                : e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),
            'number'
          );
        if (l.test(s + e.peek())) return e.next(), 'operator';
        if (a.hasOwnProperty(c)) {
          if ((e.next(), e.peek() === ' ')) return a[c.toLowerCase()];
        } else if (m.test(s)) return 'operator';
        var n;
        if (e.match(/[%&;\w]+/, !1) != null) {
          if (((n = s + e.match(/[%&;\w]+/, !0)), /&/.test(n))) return 'variable';
        } else n = s;
        if (r.nextword)
          return (
            e.match(/[\w]+/), e.peek() === '.' && e.skipTo(' '), (r.nextword = !1), 'variable-2'
          );
        if (((n = n.toLowerCase()), r.inDataStep)) {
          if (n === 'run;' || e.match(/run\s;/)) return (r.inDataStep = !1), 'builtin';
          if (n && e.next() === '.') return /\w/.test(e.peek()) ? 'variable-2' : 'variable';
          if (
            n &&
            t.hasOwnProperty(n) &&
            (t[n].state.indexOf('inDataStep') !== -1 || t[n].state.indexOf('ALL') !== -1)
          ) {
            e.start < e.pos && e.backUp(e.pos - e.start);
            for (var f = 0; f < n.length; ++f) e.next();
            return t[n].style;
          }
        }
        if (r.inProc) {
          if (n === 'run;' || n === 'quit;') return (r.inProc = !1), 'builtin';
          if (
            n &&
            t.hasOwnProperty(n) &&
            (t[n].state.indexOf('inProc') !== -1 || t[n].state.indexOf('ALL') !== -1)
          )
            return e.match(/[\w]+/), t[n].style;
        }
        return r.inMacro
          ? n === '%mend'
            ? (e.peek() === ';' && e.next(), (r.inMacro = !1), 'builtin')
            : n &&
                t.hasOwnProperty(n) &&
                (t[n].state.indexOf('inMacro') !== -1 || t[n].state.indexOf('ALL') !== -1)
              ? (e.match(/[\w]+/), t[n].style)
              : 'atom'
          : n && t.hasOwnProperty(n)
            ? (e.backUp(1),
              e.match(/[\w]+/),
              n === 'data' && /=/.test(e.peek()) === !1
                ? ((r.inDataStep = !0), (r.nextword = !0), 'builtin')
                : n === 'proc'
                  ? ((r.inProc = !0), (r.nextword = !0), 'builtin')
                  : n === '%macro'
                    ? ((r.inMacro = !0), (r.nextword = !0), 'builtin')
                    : /title[1-9]/.test(n)
                      ? 'def'
                      : n === 'footnote'
                        ? (e.eat(/[1-9]/), 'def')
                        : (r.inDataStep === !0 && t[n].state.indexOf('inDataStep') !== -1) ||
                            (r.inProc === !0 && t[n].state.indexOf('inProc') !== -1) ||
                            (r.inMacro === !0 && t[n].state.indexOf('inMacro') !== -1) ||
                            t[n].state.indexOf('ALL') !== -1
                          ? t[n].style
                          : null)
            : null;
      }
      return {
        startState: function () {
          return {
            inDataStep: !1,
            inProc: !1,
            inMacro: !1,
            nextword: !1,
            continueString: null,
            continueComment: !1,
          };
        },
        token: function (e, r) {
          return e.eatSpace() ? null : y(e, r);
        },
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
      };
    }),
      i.defineMIME('text/x-sas', 'sas');
  });
})();
var u = h.exports;
const x = b(u),
  E = g({ __proto__: null, default: x }, [u]);
export { E as s };
