import { projectList as u } from './data-NRFjrms5.js';
import { ag as l, U as m, V as p, R as f } from './antd-BmrhB3rb.js';
import {
  d as g,
  Z as o,
  a8 as _,
  a9 as t,
  k as c,
  u as e,
  _ as C,
  F as k,
  aa as h,
  a1 as a,
  $ as n,
  a0 as i,
} from './vue-BjERyvPm.js';
const x = '/1/assets/demo-1i9Hn8PF.png',
  B = ['src'],
  s = 'account-center-project',
  V = g({
    __name: 'Project',
    setup(L) {
      const d = l.Item;
      return ($, j) => (
        o(),
        _(
          e(l),
          { class: a(s) },
          {
            default: t(() => [
              c(
                e(m),
                { gutter: 16 },
                {
                  default: t(() => [
                    (o(!0),
                    C(
                      k,
                      null,
                      h(
                        e(u),
                        (r) => (
                          o(),
                          _(
                            e(p),
                            { key: r.title, span: 6 },
                            {
                              default: t(() => [
                                c(
                                  e(d),
                                  null,
                                  {
                                    default: t(() => [
                                      c(
                                        e(f),
                                        { hoverable: !0, class: a(`${s}__card`) },
                                        {
                                          default: t(() => [
                                            n('img', { src: e(x) }, null, 8, B),
                                            n(
                                              'div',
                                              { class: a(`${s}__card-title`) },
                                              i(r.title),
                                              3,
                                            ),
                                            n(
                                              'div',
                                              { class: a(`${s}__card-content`) },
                                              i(r.content),
                                              3,
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ['class'],
                                      ),
                                    ]),
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
                },
              ),
            ]),
            _: 1,
          },
        )
      );
    },
  });
export { V as _ };
