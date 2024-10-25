const __vite__fileDeps = [
    'assets/DropMenuItem-BikQ-rn4.js',
    'index.js',
    'assets/vue-BjERyvPm.js',
    'assets/antd-BmrhB3rb.js',
    'assets/index--PCnFFVm.css',
    'assets/LockModal-CtI2oVOU.js',
    'assets/index-RbNU_lzt.js',
    'assets/useWindowSizeFn-B5LTQhvs.js',
    'assets/index-ByDejTjK.css',
    'assets/BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js',
    'assets/FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js',
    'assets/componentMap-C0n90BJh.js',
    'assets/useFormItem-B4KjxddK.js',
    'assets/RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js',
    'assets/index-BpHr8pvE.js',
    'assets/uuid-D0SLUWHI.js',
    'assets/useSortable-D6mV6aGQ.js',
    'assets/download-B80gEl-k.js',
    'assets/base64Conver-bBv-IO2K.js',
    'assets/index-DxdFy9bK.css',
    'assets/index-vjZxMvXl.js',
    'assets/index-Bn5udUWy.css',
    'assets/IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js',
    'assets/copyTextToClipboard-DUmgQPO1.js',
    'assets/index-CziPtsqx.js',
    'assets/index-B1prL0gx.css',
    'assets/index-IFKYG7IQ.js',
    'assets/index-B1PKhKFM.css',
    'assets/helper-BjbsUAHT.js',
    'assets/BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js',
    'assets/BasicForm-Sl_TyPJm.css',
    'assets/useForm-b1qEKHt-.js',
    'assets/lock-DyB6sZX8.js',
    'assets/header-BHmVmQ6a.js',
    'assets/LockModal-CETB33ga.css',
    'assets/index-l-U05xqJ.js',
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
import { p as S, _ as p, f as U, l as V, h as P, o as B } from '../index.js';
import { D as T } from './siteSetting-BSGR9S7Z.js';
import { c as d, u as F } from './index-CZxVBT9w.js';
import { b as k } from './index-RbNU_lzt.js';
import { h as z } from './header-BHmVmQ6a.js';
import { x as y, D as H } from './antd-BmrhB3rb.js';
import {
  d as W,
  c as Z,
  Z as t,
  _ as j,
  k as a,
  a9 as m,
  u as e,
  a8 as i,
  ab as c,
  $ as l,
  a1 as u,
  a0 as q,
  F as G,
} from './vue-BjERyvPm.js';
import './index-BvvAk0TE.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './useSortable-D6mV6aGQ.js';
import './index-dz3v0Mah.js';
import './lock-DyB6sZX8.js';
const J = ['src'],
  le = W({
    name: 'UserDropdown',
    __name: 'index',
    props: { theme: S.oneOf(['dark', 'light']) },
    setup(x) {
      const n = d(() =>
          p(() => import('./DropMenuItem-BikQ-rn4.js'), __vite__mapDeps([0, 1, 2, 3, 4])),
        ),
        v = d(() =>
          p(
            () => import('./LockModal-CtI2oVOU.js'),
            __vite__mapDeps([
              5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
              25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
            ]),
          ),
        ),
        w = d(() =>
          p(
            () => import('./index-l-U05xqJ.js'),
            __vite__mapDeps([
              35, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
              24, 25, 26, 27, 28, 29, 30, 31,
            ]),
          ),
        ),
        { prefixCls: o } = U('header-user-dropdown'),
        { t: r } = P(),
        { getShowDoc: _, getUseLockPage: D, getShowApi: C } = F(),
        f = V(),
        g = Z(() => {
          const { realName: s = '', avatar: h, desc: $ } = f.getUserInfo || {};
          return { realName: s, avatar: h || z, desc: $ };
        }),
        [L, { openModal: A }] = k(),
        [I, { openModal: b }] = k();
      function O() {
        A(!0);
      }
      function R() {
        b(!0, {});
      }
      function E() {
        f.confirmLoginOut();
      }
      function M() {
        B(T);
      }
      function N(s) {
        switch (s.key) {
          case 'logout':
            E();
            break;
          case 'doc':
            M();
            break;
          case 'lock':
            O();
            break;
          case 'api':
            R();
            break;
        }
      }
      return (s, h) => (
        t(),
        j(
          G,
          null,
          [
            a(
              e(H),
              { placement: 'bottomLeft', overlayClassName: `${e(o)}-dropdown-overlay` },
              {
                overlay: m(() => [
                  a(
                    e(y),
                    { onClick: N },
                    {
                      default: m(() => [
                        e(_)
                          ? (t(),
                            i(
                              e(n),
                              {
                                key: 'doc',
                                text: e(r)('layout.header.dropdownItemDoc'),
                                icon: 'ion:document-text-outline',
                              },
                              null,
                              8,
                              ['text'],
                            ))
                          : c('', !0),
                        e(_) ? (t(), i(e(y).Divider, { key: 1 })) : c('', !0),
                        e(C)
                          ? (t(),
                            i(
                              e(n),
                              {
                                key: 'api',
                                text: e(r)('layout.header.dropdownChangeApi'),
                                icon: 'ant-design:swap-outlined',
                              },
                              null,
                              8,
                              ['text'],
                            ))
                          : c('', !0),
                        e(D)
                          ? (t(),
                            i(
                              e(n),
                              {
                                key: 'lock',
                                text: e(r)('layout.header.tooltipLock'),
                                icon: 'ion:lock-closed-outline',
                              },
                              null,
                              8,
                              ['text'],
                            ))
                          : c('', !0),
                        a(
                          e(n),
                          {
                            key: 'logout',
                            text: e(r)('layout.header.dropdownItemLoginOut'),
                            icon: 'ion:power-outline',
                          },
                          null,
                          8,
                          ['text'],
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                default: m(() => [
                  l(
                    'span',
                    { class: u([[e(o), `${e(o)}--${x.theme}`], 'flex']) },
                    [
                      l('img', { class: u(`${e(o)}__header`), src: g.value.avatar }, null, 10, J),
                      l(
                        'span',
                        { class: u(`${e(o)}__info hidden md:block`) },
                        [
                          l(
                            'span',
                            { class: u([`${e(o)}__name`, 'truncate']) },
                            q(g.value.realName),
                            3,
                          ),
                        ],
                        2,
                      ),
                    ],
                    2,
                  ),
                ]),
                _: 1,
              },
              8,
              ['overlayClassName'],
            ),
            a(e(v), { onRegister: e(L) }, null, 8, ['onRegister']),
            a(e(w), { onRegister: e(I) }, null, 8, ['onRegister']),
          ],
          64,
        )
      );
    },
  });
export { le as default };
