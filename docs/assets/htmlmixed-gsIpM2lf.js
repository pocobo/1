import { b as a } from './antd-BmrhB3rb.js';
import { r as f } from './htmlmixed-sKS1wXfB.js';
function s(r, m) {
  for (var o = 0; o < m.length; o++) {
    const e = m[o];
    if (typeof e != 'string' && !Array.isArray(e)) {
      for (const t in e)
        if (t !== 'default' && !(t in r)) {
          const i = Object.getOwnPropertyDescriptor(e, t);
          i && Object.defineProperty(r, t, i.get ? i : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: 'Module' }));
}
var n = f();
const l = a(n),
  u = s({ __proto__: null, default: l }, [n]);
export { u as h };
