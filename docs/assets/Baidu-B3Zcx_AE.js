var l = (i, s, t) =>
  new Promise((c, a) => {
    var n = (e) => {
        try {
          o(t.next(e));
        } catch (p) {
          a(p);
        }
      },
      r = (e) => {
        try {
          o(t.throw(e));
        } catch (p) {
          a(p);
        }
      },
      o = (e) => (e.done ? c(e.value) : Promise.resolve(e.value).then(n, r));
    o((t = t.apply(i, s)).next());
  });
import { u } from './useScript-BwrFIpPm.js';
import { d as m, f as d, o as f, Z as h, _ as w, ag as B, y, u as _ } from './vue-BjERyvPm.js';
const g =
    'https://api.map.baidu.com/getscript?v=3.0&ak=OaBvYmKX3pjF7YFUFeeBCeGdy9Zp7xB2&services=&t=20210201100830&s=1',
  x = m({
    name: 'BaiduMap',
    __name: 'Baidu',
    props: {
      width: { type: String, default: '100%' },
      height: { type: String, default: 'calc(100vh - 78px)' },
    },
    setup(i) {
      const s = d(null),
        { toPromise: t } = u({ src: g });
      function c() {
        return l(this, null, function* () {
          yield t(), yield y();
          const a = _(s);
          if (!a) return;
          const n = window.BMap,
            r = new n.Map(a),
            o = new n.Point(116.404, 39.915);
          r.centerAndZoom(o, 15), r.enableScrollWheelZoom(!0);
        });
      }
      return (
        f(() =>
          l(this, null, function* () {
            yield c();
          }),
        ),
        (a, n) => (
          h(),
          w(
            'div',
            { ref_key: 'wrapRef', ref: s, style: B({ height: i.height, width: i.width }) },
            null,
            4,
          )
        )
      );
    },
  });
export { x as default };
