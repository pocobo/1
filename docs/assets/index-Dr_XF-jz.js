import { aQ as R, aR as B, aS as z, Z as W, C as N } from '../index.js';
import {
  f as k,
  u as c,
  s as T,
  g as L,
  j as U,
  d as F,
  b as P,
  a7 as V,
  Z as j,
  a8 as D,
  a9 as g,
  k as h,
  G as b,
} from './vue-BjERyvPm.js';
import { P as G } from './index-B24a6rfW.js';
import './antd-BmrhB3rb.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const S = 'watermark-dom',
  x = k(null),
  d = new Map();
function E(n) {
  return Array.from(d.values()).find((t) => t.targetElement === n);
}
function $(n, t) {
  const o = document.createElement('canvas'),
    m = 300,
    i = 240;
  Object.assign(o, { width: m, height: i });
  const r = o.getContext('2d');
  if (r) {
    const l = (t == null ? void 0 : t.fontFamily) || 'Vedana',
      y = (t == null ? void 0 : t.fontSize) || 15,
      s = (t == null ? void 0 : t.fontColor) || 'rgba(0, 0, 0, 0.15)',
      f = (t == null ? void 0 : t.textAlign) || 'left',
      e = (t == null ? void 0 : t.textBaseline) || 'middle',
      a = (t == null ? void 0 : t.rotate) || 20;
    r.rotate((-a * Math.PI) / 180),
      (r.font = `${y}px ${l}`),
      (r.fillStyle = s),
      (r.textAlign = f),
      (r.textBaseline = e),
      r.fillText(n, m / 20, i);
  }
  return o.toDataURL('image/png');
}
const H = (n, t, o) => {
    (n.className = '__' + S),
      (n.style.pointerEvents = 'none'),
      (n.style.display = 'block'),
      (n.style.visibility = 'visible'),
      (n.style.top = '0px'),
      (n.style.left = '0px'),
      (n.style.position = 'absolute'),
      (n.style.zIndex = '100000'),
      (n.style.height = '100%'),
      (n.style.width = '100%'),
      (n.style.background = `url(${$(c(x) || t, o)}) left top repeat`);
  },
  Z = () =>
    new MutationObserver((t) => {
      var o, m;
      for (const i of t) {
        for (const r of Array.from(i.removedNodes)) {
          const l = E(r);
          if (!l) return;
          const { targetElement: y, parentElement: s } = l;
          (s != null && s.contains(y)) ||
            (o = l == null ? void 0 : l.parentElement) == null ||
            o.appendChild(r);
        }
        if (i.type === 'attributes' && i.target) {
          const r = i.target,
            l = E(r);
          l &&
            (_(),
            l.setWatermark((m = l.targetElement) == null ? void 0 : m['data-watermark-text']));
        }
      }
    });
function v(n = k(document.body), t = {}) {
  const o = Symbol(S);
  if (c(n) && d.has(o)) {
    const { setWatermark: e, clear: a } = d.get(o);
    return { setWatermark: e, clear: a, clearAll: _ };
  }
  const i = z(function () {
      const e = c(n);
      if (!e) return;
      const { clientHeight: a, clientWidth: u } = e;
      y({ height: a, width: u });
    }),
    r = T(),
    l = () => {
      var u, C;
      const e = c(r);
      r.value = void 0;
      const a = c(n);
      d.has(o) && ((C = (u = d.get(o)) == null ? void 0 : u.obInstance) == null || C.disconnect()),
        d.delete(o),
        a && (e && a.removeChild(e), R(a, i));
    };
  function y(e = {}) {
    const a = c(r);
    a &&
      (W(e.width) && (a.style.width = `${e.width}px`),
      W(e.height) && (a.style.height = `${e.height}px`),
      W(e.str) && (a.style.background = `url(${$(e.str, t)}) left top repeat`));
  }
  const s = (e) => {
    var p, I;
    if (c(r) && d.has(o)) {
      (x.value = e), y({ str: e });
      return;
    }
    const a = document.createElement('div');
    (a['data-watermark-text'] = e), (x.value = e), (r.value = a), H(a, e, t);
    const u = c(n);
    if (!u) return;
    const { clientHeight: C, clientWidth: A } = u;
    y({ str: e, width: A, height: C }),
      u.appendChild(a),
      d.set(o, {
        setWatermark: f,
        clear: l,
        parentElement: u,
        targetElement: a,
        obInstance: Z(),
        waterMarkOptions: t,
      }),
      (I = (p = d.get(o)) == null ? void 0 : p.obInstance) == null ||
        I.observe(u, { childList: !0, subtree: !0, attributes: !0 });
  };
  function f(e) {
    s(e),
      B(document.documentElement, i),
      L() &&
        U(() => {
          l();
        });
  }
  return { setWatermark: f, clear: l, clearAll: _ };
}
function _() {
  Array.from(d.values()).forEach((n) => {
    var t;
    (t = n == null ? void 0 : n.obInstance) == null || t.disconnect(), n.clear();
  });
}
const M = F({
  __name: 'index',
  setup(n) {
    const t = k(document.body),
      { setWatermark: o, clear: m, clearAll: i } = v(),
      { setWatermark: r } = v(),
      { setWatermark: l } = v(t, { fontColor: 'red', fontSize: 12, rotate: 30 });
    return (
      P(() => {
        i();
      }),
      (y, s) => {
        const f = V('a-button');
        return (
          j(),
          D(
            c(G),
            { title: '水印示例' },
            {
              default: g(() => [
                h(
                  c(N),
                  { class: 'w-full h-32 bg-white rounded-md', title: 'Global WaterMark' },
                  {
                    default: g(() => [
                      h(
                        f,
                        {
                          type: 'primary',
                          class: 'mr-2',
                          onClick: s[0] || (s[0] = (e) => c(o)('WaterMark Info1')),
                        },
                        { default: g(() => [b(' Create Watermark1 ')]), _: 1 },
                      ),
                      h(
                        f,
                        {
                          type: 'primary',
                          class: 'mr-2',
                          onClick: s[1] || (s[1] = (e) => c(r)('WaterMark Info2')),
                        },
                        { default: g(() => [b(' Create Watermark2 ')]), _: 1 },
                      ),
                      h(
                        f,
                        {
                          type: 'primary',
                          class: 'mr-2',
                          onClick: s[2] || (s[2] = (e) => c(l)('Custome Style WaterMark')),
                        },
                        { default: g(() => [b(' Create custom style Watermark ')]), _: 1 },
                      ),
                      h(
                        f,
                        { color: 'error', class: 'mr-2', onClick: c(m) },
                        { default: g(() => [b(' Clear Watermark1 ')]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                      h(
                        f,
                        { color: 'error', class: 'mr-2', onClick: c(i) },
                        { default: g(() => [b(' ClearAll ')]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                      h(
                        f,
                        {
                          color: 'warning',
                          class: 'mr-2',
                          onClick: s[3] || (s[3] = (e) => c(o)('WaterMark Info New')),
                        },
                        { default: g(() => [b(' Update Watermark1 ')]), _: 1 },
                      ),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              _: 1,
            },
          )
        );
      }
    );
  },
});
export { M as default };
