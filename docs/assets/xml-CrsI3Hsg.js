import { b as s } from './antd-BmrhB3rb.js';
import { r as l } from './xml-w1k-fQXr.js';
function i(t, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != 'string' && !Array.isArray(e)) {
      for (const r in e)
        if (r !== 'default' && !(r in t)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(t, r, n.get ? n : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }));
}
var f = l();
const c = s(f),
  u = i({ __proto__: null, default: c }, [f]);
export { u as x };
