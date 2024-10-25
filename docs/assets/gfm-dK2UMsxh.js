import { b as k } from './antd-BmrhB3rb.js';
import { r as b } from './index-Ck6h_6RS.js';
import { r as v } from './markdown-HG77ugih.js';
import { r as h } from './overlay-XNxaH2Br.js';
function y(a, c) {
  for (var o = 0; o < c.length; o++) {
    const t = c[o];
    if (typeof t != 'string' && !Array.isArray(t)) {
      for (const r in t)
        if (r !== 'default' && !(r in a)) {
          const i = Object.getOwnPropertyDescriptor(t, r);
          i && Object.defineProperty(a, r, i.get ? i : { enumerable: !0, get: () => t[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' }));
}
var x = { exports: {} };
(function (a, c) {
  (function (o) {
    o(b(), v(), h());
  })(function (o) {
    var t =
      /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;
    o.defineMode(
      'gfm',
      function (r, i) {
        var s = 0;
        function m(e) {
          return (e.code = !1), null;
        }
        var d = {
            startState: function () {
              return { code: !1, codeBlock: !1, ateSpace: !1 };
            },
            copyState: function (e) {
              return { code: e.code, codeBlock: e.codeBlock, ateSpace: e.ateSpace };
            },
            token: function (e, n) {
              if (((n.combineTokens = null), n.codeBlock))
                return e.match(/^```+/) ? ((n.codeBlock = !1), null) : (e.skipToEnd(), null);
              if ((e.sol() && (n.code = !1), e.sol() && e.match(/^```+/)))
                return e.skipToEnd(), (n.codeBlock = !0), null;
              if (e.peek() === '`') {
                e.next();
                var g = e.pos;
                e.eatWhile('`');
                var f = 1 + e.pos - g;
                return n.code ? f === s && (n.code = !1) : ((s = f), (n.code = !0)), null;
              } else if (n.code) return e.next(), null;
              if (e.eatSpace()) return (n.ateSpace = !0), null;
              if ((e.sol() || n.ateSpace) && ((n.ateSpace = !1), i.gitHubSpice !== !1)) {
                if (
                  e.match(
                    /^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/,
                  )
                )
                  return (n.combineTokens = !0), 'link';
                if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))
                  return (n.combineTokens = !0), 'link';
              }
              return e.match(t) &&
                e.string.slice(e.start - 2, e.start) != '](' &&
                (e.start == 0 || /\W/.test(e.string.charAt(e.start - 1)))
                ? ((n.combineTokens = !0), 'link')
                : (e.next(), null);
            },
            blankLine: m,
          },
          p = { taskLists: !0, strikethrough: !0, emoji: !0 };
        for (var l in i) p[l] = i[l];
        return (p.name = 'markdown'), o.overlayMode(o.getMode(r, p), d);
      },
      'markdown',
    ),
      o.defineMIME('text/x-gfm', 'gfm');
  });
})();
var u = x.exports;
const w = k(u),
  A = y({ __proto__: null, default: w }, [u]);
export { A as g };
