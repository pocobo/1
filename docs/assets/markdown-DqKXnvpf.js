import { b as s } from './antd-BmrhB3rb.js';
import { r as i } from './markdown-HG77ugih.js';
function c(t, a) {
  for (var o = 0; o < a.length; o++) {
    const r = a[o];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const e in r)
        if (e !== 'default' && !(e in t)) {
          const n = Object.getOwnPropertyDescriptor(r, e);
          n && Object.defineProperty(t, e, n.get ? n : { enumerable: !0, get: () => r[e] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }));
}
var f = i();
const m = s(f),
  d = c({ __proto__: null, default: m }, [f]);
export { d as m };
