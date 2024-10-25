import { C as a, z as o, a0 as r, o as p } from '../index.js';
import { _ as c } from './IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js';
import { P as u } from './index-B24a6rfW.js';
import {
  a5 as m,
  bc as _,
  a6 as y,
  a7 as x,
  bd as v,
  be as z,
  bf as C,
  aE as h,
} from './antd-BmrhB3rb.js';
import {
  d as I,
  a7 as b,
  Z as f,
  a8 as g,
  a9 as s,
  k as e,
  u as t,
  $ as i,
  _ as F,
  F as S,
  aa as k,
  G as w,
} from './vue-BjERyvPm.js';
import './copyTextToClipboard-DUmgQPO1.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const j = { class: 'flex justify-around' },
  $ = { class: 'flex justify-around flex-wrap' },
  B = { class: 'flex justify-around flex-wrap' },
  A = { class: 'flex justify-around flex-wrap' },
  N = { class: 'flex justify-around flex-wrap' },
  H = I({
    __name: 'index',
    setup(V) {
      return (W, l) => {
        const d = b('a-button');
        return (
          f(),
          g(
            t(u),
            { title: 'Icon组件示例' },
            {
              default: s(() => [
                e(
                  t(a),
                  { title: 'Antv Icon使用 (直接按需引入相应组件即可)' },
                  {
                    default: s(() => [
                      i('div', j, [
                        e(t(m), { style: { fontSize: '30px' } }),
                        e(t(_), { style: { fontSize: '30px' } }),
                        e(t(y), { style: { fontSize: '30px' } }),
                        e(t(x), { style: { fontSize: '30px' } }),
                        e(t(v), { style: { fontSize: '30px' } }),
                        e(t(z), { style: { fontSize: '30px' } }),
                        e(t(C), { style: { fontSize: '30px' } }),
                      ]),
                    ]),
                    _: 1,
                  },
                ),
                e(
                  t(a),
                  { title: 'IconIfy 组件使用', class: 'my-5' },
                  {
                    default: s(() => [
                      i('div', $, [
                        e(o, { icon: 'ion:layers-outline', size: 30 }),
                        e(o, { icon: 'ion:bar-chart-outline', size: 30 }),
                        e(o, { icon: 'ion:tv-outline', size: 30 }),
                        e(o, { icon: 'ion:settings-outline', size: 30 }),
                      ]),
                    ]),
                    _: 1,
                  },
                ),
                e(
                  t(a),
                  { title: 'svg 雪碧图', class: 'my-5' },
                  {
                    default: s(() => [
                      i('div', B, [
                        e(t(r), { name: 'test', size: '32' }),
                        (f(),
                        F(
                          S,
                          null,
                          k(6, (n) =>
                            e(t(r), { key: n, name: `dynamic-avatar-${n}`, size: '32' }, null, 8, [
                              'name',
                            ]),
                          ),
                          64,
                        )),
                      ]),
                    ]),
                    _: 1,
                  },
                ),
                e(
                  t(a),
                  { title: '图标选择器(Iconify)', class: 'my-5' },
                  { default: s(() => [i('div', A, [e(t(c))])]), _: 1 },
                ),
                e(
                  t(a),
                  { title: '图标选择器(Svg)', class: 'my-5' },
                  { default: s(() => [i('div', N, [e(t(c), { mode: 'svg' })])]), _: 1 },
                ),
                e(t(h), {
                  'show-icon': '',
                  message: '推荐使用Iconify组件',
                  description:
                    'Icon组件基本包含所有的图标,在下面网址内你可以查询到你想要的任何图标。并且打包只会打包所用到的图标。',
                }),
                e(
                  d,
                  {
                    type: 'link',
                    onClick: l[0] || (l[0] = (n) => t(p)('https://iconify.design/')),
                  },
                  { default: s(() => [w(' Iconify 图标大全 ')]), _: 1 },
                ),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  });
export { H as default };
