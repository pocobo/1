import { C as m } from '../index.js';
import { a as p } from './data-CMLH8mPi.js';
import {
  d,
  Z as r,
  a8 as n,
  a9 as t,
  k as l,
  u as a,
  _ as i,
  F as _,
  aa as f,
  G as x,
  a0 as s,
  ab as k,
  $ as g,
} from './vue-BjERyvPm.js';
import { ag as o } from './antd-BmrhB3rb.js';
const C = {
    key: 0,
    class: 'float-right mt-10px mr-30px text-blue-500 text-font-normal cursor-pointer',
  },
  V = d({
    __name: 'SecureSetting',
    setup(L) {
      const c = o.Item,
        u = o.Item.Meta;
      return (h, y) => (
        r(),
        n(
          a(m),
          { title: '安全设置', canExpand: !1 },
          {
            default: t(() => [
              l(a(o), null, {
                default: t(() => [
                  (r(!0),
                  i(
                    _,
                    null,
                    f(
                      a(p),
                      (e) => (
                        r(),
                        n(
                          a(c),
                          { key: e.key },
                          {
                            default: t(() => [
                              l(
                                a(u),
                                null,
                                {
                                  title: t(() => [
                                    x(s(e.title) + ' ', 1),
                                    e.extra ? (r(), i('div', C, s(e.extra), 1)) : k('', !0),
                                  ]),
                                  description: t(() => [g('div', null, s(e.description), 1)]),
                                  _: 2,
                                },
                                1024,
                              ),
                            ]),
                            _: 2,
                          },
                          1024,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          },
        )
      );
    },
  });
export { V as _ };
