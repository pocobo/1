import { U as d, c as _ } from '../index.js';
import { P as k } from './index-B24a6rfW.js';
import {
  d as v,
  f as C,
  a7 as x,
  Z as f,
  a8 as B,
  a9 as s,
  $ as a,
  k as l,
  G as n,
  u as i,
  _ as y,
  F as $,
  aa as b,
  a0 as g,
} from './vue-BjERyvPm.js';
import './antd-BmrhB3rb.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const w = { class: 'my-4' },
  N = { class: 'scroll-wrap' },
  S = { class: 'p-3' },
  T = v({
    __name: 'Action',
    setup(V) {
      const p = C(null),
        m = () => {
          const e = i(p);
          if (!e) throw new Error('scroll is Null');
          return e;
        };
      function c(e) {
        m().scrollTo(e);
      }
      function u() {
        m().scrollBottom();
      }
      return (e, t) => {
        const r = x('a-button');
        return (
          f(),
          B(
            i(k),
            { title: '滚动组件函数示例', content: '基于el-scrollbar' },
            {
              default: s(() => [
                a('div', w, [
                  l(
                    r,
                    { onClick: t[0] || (t[0] = (o) => c(100)), class: 'mr-2' },
                    { default: s(() => [n(' 滚动到100px位置 ')]), _: 1 },
                  ),
                  l(
                    r,
                    { onClick: t[1] || (t[1] = (o) => c(800)), class: 'mr-2' },
                    { default: s(() => [n(' 滚动到800px位置 ')]), _: 1 },
                  ),
                  l(
                    r,
                    { onClick: t[2] || (t[2] = (o) => c(0)), class: 'mr-2' },
                    { default: s(() => [n(' 滚动到顶部 ')]), _: 1 },
                  ),
                  l(
                    r,
                    { onClick: t[3] || (t[3] = (o) => u()), class: 'mr-2' },
                    { default: s(() => [n(' 滚动到底部 ')]), _: 1 },
                  ),
                ]),
                a('div', N, [
                  l(
                    i(d),
                    { class: 'mt-4', ref_key: 'scrollRef', ref: p },
                    {
                      default: s(() => [
                        a('ul', S, [
                          (f(),
                          y(
                            $,
                            null,
                            b(100, (o) =>
                              a(
                                'li',
                                { key: o, class: 'p-2', style: { border: '1px solid #eee' } },
                                g(o),
                                1,
                              ),
                            ),
                            64,
                          )),
                        ]),
                      ]),
                      _: 1,
                    },
                    512,
                  ),
                ]),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  }),
  I = _(T, [['__scopeId', 'data-v-05a41703']]);
export { I as default };
