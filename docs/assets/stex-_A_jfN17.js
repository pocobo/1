import { b as f } from './antd-BmrhB3rb.js';
import { r as i } from './stex-DZwe0MKe.js';
function c(r, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
    if (typeof e != 'string' && !Array.isArray(e)) {
      for (const t in e)
        if (t !== 'default' && !(t in r)) {
          const s = Object.getOwnPropertyDescriptor(e, t);
          s && Object.defineProperty(r, t, s.get ? s : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: 'Module' }));
}
var a = i();
const p = f(a),
  g = c({ __proto__: null, default: p }, [a]);
export { g as s };
