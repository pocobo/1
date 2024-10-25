import { P as R } from './index-B24a6rfW.js';
import { D as n } from './index-DXnpckpY.js';
import { G as m, D, S as T } from './siteSetting-BSGR9S7Z.js';
import { u as i } from './useDescription-CSes53e9.js';
import {
  d as B,
  Z as S,
  a8 as V,
  a9 as g,
  $ as r,
  u as s,
  a0 as G,
  G as q,
  k as a,
  l as v,
} from './vue-BjERyvPm.js';
import { Q as z } from './antd-BmrhB3rb.js';
import '../index.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
var C = {
  pkg: {
    dependencies: {
      '@ant-design/icons-vue': '^7.0.1',
      '@iconify/iconify': '^3.1.1',
      '@logicflow/core': '^1.2.26',
      '@logicflow/extension': '^1.2.26',
      '@vben/hooks': 'workspace:*',
      '@vue/shared': '^3.4.25',
      '@vueuse/core': '^10.9.0',
      '@zxcvbn-ts/core': '^3.0.4',
      'ant-design-vue': '^4.2.1',
      axios: '^1.6.8',
      codemirror: '^5.65.16',
      cropperjs: '^1.6.2',
      'crypto-js': '^4.2.0',
      dayjs: '^1.11.10',
      echarts: '^5.5.0',
      exceljs: '^4.4.0',
      html2canvas: '^1.4.1',
      'lodash-es': '^4.17.21',
      mockjs: '^1.1.0',
      nprogress: '^0.2.0',
      'path-to-regexp': '^6.2.2',
      pinia: '2.1.7',
      'pinia-plugin-persistedstate': '^3.2.1',
      'print-js': '^1.6.0',
      qrcode: '^1.5.3',
      qs: '^6.12.1',
      'resize-observer-polyfill': '^1.5.1',
      showdown: '^2.1.0',
      sortablejs: '^1.15.2',
      tinymce: '^5.10.9',
      unocss: '^0.59.4',
      vditor: '^3.10.4',
      vue: '^3.4.25',
      'vue-i18n': '^9.13.1',
      'vue-json-pretty': '^2.4.0',
      'vue-router': '^4.3.2',
      'vue-types': '^5.1.1',
      vuedraggable: '^4.1.0',
      'vxe-table': '^4.6.3',
      'vxe-table-plugin-export-xlsx': '^4.0.1',
      'xe-utils': '^3.5.25',
      xlsx: '^0.18.5',
    },
    devDependencies: {
      '@commitlint/cli': '^19.3.0',
      '@commitlint/config-conventional': '^19.2.2',
      '@iconify/json': '^2.2.203',
      '@purge-icons/generated': '^0.10.0',
      '@types/codemirror': '^5.60.15',
      '@types/crypto-js': '^4.2.2',
      '@types/lodash-es': '^4.17.12',
      '@types/mockjs': '^1.0.10',
      '@types/nprogress': '^0.2.3',
      '@types/qrcode': '^1.5.5',
      '@types/qs': '^6.9.15',
      '@types/showdown': '^2.0.6',
      '@types/sortablejs': '^1.15.8',
      '@vben/eslint-config': 'workspace:*',
      '@vben/stylelint-config': 'workspace:*',
      '@vben/ts-config': 'workspace:*',
      '@vben/types': 'workspace:*',
      '@vben/vite-config': 'workspace:*',
      '@vue/compiler-sfc': '^3.4.25',
      '@vue/test-utils': '^2.4.5',
      'conventional-changelog-cli': '^4.1.0',
      'cross-env': '^7.0.3',
      'cz-git': '^1.9.1',
      czg: '^1.9.1',
      husky: '^9.0.11',
      'lint-staged': '15.2.2',
      prettier: '^3.2.5',
      'prettier-plugin-packagejson': '^2.5.0',
      rimraf: '^5.0.5',
      turbo: '^1.13.2',
      typescript: '^5.4.5',
      unbuild: '^2.0.0',
      vite: '^5.2.10',
      'vite-plugin-mock': '^2.9.6',
      'vite-plugin-vue-devtools': '^7.2.0',
      'vue-tsc': '^2.0.14',
    },
    name: 'vben-admin',
    version: '2.11.5',
  },
  lastBuildTime: '2024-10-25 14:58:30',
};
const L = { class: 'flex justify-between items-center' },
  N = { class: 'flex-1' },
  O = ['href'],
  J = B({
    __name: 'index',
    setup(P) {
      const { pkg: f, lastBuildTime: b } = C,
        { dependencies: c, devDependencies: l, name: h, version: y } = f,
        p = [],
        d = [],
        u = (e) => (t) => v(z, { color: e }, () => t),
        o = (e) => (t) => v('a', { href: t, target: '_blank' }, e),
        _ = [
          { label: '版本', field: 'version', render: u('blue') },
          { label: '最后编译时间', field: 'lastBuildTime', render: u('blue') },
          { label: '文档地址', field: 'doc', render: o('文档地址') },
          { label: '预览地址', field: 'preview', render: o('预览地址') },
          { label: 'Github', field: 'github', render: o('Github') },
        ],
        k = { version: y, lastBuildTime: b, doc: D, preview: T, github: m };
      Object.keys(c).forEach((e) => {
        p.push({ field: e, label: e });
      }),
        Object.keys(l).forEach((e) => {
          d.push({ field: e, label: e });
        });
      const [x] = i({ title: '生产环境依赖', data: c, schema: p, column: 3 }),
        [j] = i({ title: '开发环境依赖', data: l, schema: d, column: 3 }),
        [w] = i({ title: '项目信息', data: k, schema: _, column: 2 });
      return (e, t) => (
        S(),
        V(
          s(R),
          { title: '关于' },
          {
            headerContent: g(() => [
              r('div', L, [
                r('span', N, [
                  r('a', { href: s(m), target: '_blank' }, G(s(h)), 9, O),
                  q(
                    ' 是一个基于Vue3.0、Vite、 Ant-Design-Vue 、TypeScript 的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案及丰富的示例,原则上不会限制任何代码用于商用。 ',
                  ),
                ]),
              ]),
            ]),
            default: g(() => [
              a(s(n), { onRegister: s(w), class: 'enter-y' }, null, 8, ['onRegister']),
              a(s(n), { onRegister: s(x), class: 'my-4 enter-y' }, null, 8, ['onRegister']),
              a(s(n), { onRegister: s(j), class: 'enter-y' }, null, 8, ['onRegister']),
            ]),
            _: 1,
          },
        )
      );
    },
  });
export { J as default };
