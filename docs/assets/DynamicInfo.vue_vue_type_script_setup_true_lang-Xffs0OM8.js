import { d as _ } from './data-eeqyhHg8.js';
import { z as d } from '../index.js';
import { ag as s, R as p } from './antd-BmrhB3rb.js';
import {
  d as u,
  a7 as f,
  Z as I,
  a8 as y,
  a9 as a,
  k as t,
  G as n,
  u as e,
  a0 as r,
  $ as L,
  ac as h,
} from './vue-BjERyvPm.js';
const k = ['innerHTML'],
  B = u({
    __name: 'DynamicInfo',
    setup(x) {
      const i = s.Item,
        c = s.Item.Meta;
      return (m, z) => {
        const l = f('a-button');
        return (
          I(),
          y(
            e(p),
            h({ title: '最新动态' }, m.$attrs),
            {
              extra: a(() => [
                t(l, { type: 'link', size: 'small' }, { default: a(() => [n('更多')]), _: 1 }),
              ]),
              default: a(() => [
                t(
                  e(s),
                  { 'item-layout': 'horizontal', 'data-source': e(_) },
                  {
                    renderItem: a(({ item: o }) => [
                      t(
                        e(i),
                        null,
                        {
                          default: a(() => [
                            t(
                              e(c),
                              null,
                              {
                                description: a(() => [n(r(o.date), 1)]),
                                title: a(() => [
                                  n(r(o.name) + ' ', 1),
                                  L('span', { innerHTML: o.desc }, null, 8, k),
                                ]),
                                avatar: a(() => [
                                  t(d, { icon: o.avatar, size: 30 }, null, 8, ['icon']),
                                ]),
                                _: 2,
                              },
                              1024,
                            ),
                          ]),
                          _: 2,
                        },
                        1024,
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ['data-source'],
                ),
              ]),
              _: 1,
            },
            16,
          )
        );
      };
    },
  });
export { B as _ };
