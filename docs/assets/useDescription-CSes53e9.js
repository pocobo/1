import { v as i } from '../index.js';
import { g as a, f as n, u } from './vue-BjERyvPm.js';
function p(s) {
  if (!a())
    throw new Error('useDescription() can only be used inside setup() or functional components!');
  const o = n(null),
    r = n(!1);
  function c(e) {
    (u(r) && i()) || ((o.value = e), s && e.setDescProps(s), (r.value = !0));
  }
  return [
    c,
    {
      setDescProps: (e) => {
        var t;
        (t = u(o)) == null || t.setDescProps(e);
      },
    },
  ];
}
export { p as u };
